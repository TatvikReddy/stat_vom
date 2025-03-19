import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure, devProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";
import { desc, eq } from "drizzle-orm";

// Define the post schema for input validation
const postInputSchema = z.object({
  title: z.string().min(3).max(256),
  content: z.string().min(10),
});

export const postRouter = createTRPCRouter({
  // Get all posts
  getAll: publicProcedure.query(async ({ ctx }) => {
    const allPosts = await ctx.db.query.posts.findMany({
      orderBy: [desc(posts.createdAt)],
    });
    return allPosts;
  }),
  
  // Get a single post by ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.query.posts.findFirst({
        where: eq(posts.id, input.id),
      });
      return post;
    }),

  // Create a new post (only available to developers)
  create: devProcedure
    .input(postInputSchema)
    .mutation(async ({ ctx, input }) => {
      // Get the user ID from auth context
      if (!ctx.userId) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
      
      // Insert the post
      await ctx.db.insert(posts).values({
        title: input.title,
        content: input.content,
        authorId: ctx.userId,
        name: input.title, // For backward compatibility
      });
      
      // Get the latest post that was just created
      const newPost = await ctx.db.query.posts.findFirst({
        orderBy: [desc(posts.createdAt)],
      });
      
      return {
        success: true,
        post: newPost,
      };
    }),
    
  // Delete a post (only available to developers)
  delete: devProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(posts).where(eq(posts.id, input.id));
      return { success: true };
    }),
});
