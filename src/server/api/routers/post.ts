import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { currentUser } from "@clerk/nextjs/server"; // updated import: use @clerk/nextjs/server

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const result = await ctx.db.query.posts.findMany({
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
      });
      return result;
    } catch (error: unknown) {
      console.error("Error fetching posts:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch posts",
      });
    }
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1).max(100),
        content: z.string().min(1),
        name: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // Get the current user using Clerk's server-side API
        const user = await currentUser();
        const authorId = user?.id;

        if (!authorId) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to create a post",
          });
        }

        // Check if user has developer role in publicMetadata
        const isDeveloper = user?.publicMetadata?.typeUser === "Dev";

        if (!isDeveloper) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Only developers can create posts",
          });
        }

        await ctx.db.insert(posts).values({
          title: input.title,
          content: input.content,
          authorId,
          name: input.name,
        });

        return {
          success: true as const,
          message: "Post created successfully",
        };
      } catch (error: unknown) {
        console.error("Error creating post:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create post",
        });
      }
    }),
});
