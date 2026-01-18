import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import {
  createTRPCRouter,
  publicProcedure,
  devProcedure,
} from "~/server/api/trpc";
import { newsPosts } from "~/server/db/schema";

// Input validation schemas
const newsPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  excerpt: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(255),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.string().min(1, "Category is required"),
  image: z.string().optional(),
});

export const newsRouter = createTRPCRouter({
  // Get all news posts for public display
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const result = await ctx.db.query.newsPosts.findMany({
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
        where: (posts, { eq }) => eq(posts.published, 1),
      });
      return result;
    } catch (error) {
      console.error("Error fetching news posts:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch news posts",
      });
    }
  }),

  // Get a single news post by ID
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      try {
        const post = await ctx.db.query.newsPosts.findFirst({
          where: (newsPosts, { eq }) => eq(newsPosts.id, input.id),
        });

        if (!post) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "News post not found",
          });
        }

        return post;
      } catch (error) {
        if (error instanceof TRPCError) throw error;

        console.error("Error fetching news post:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch news post",
        });
      }
    }),

  // Get all news posts by category
  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const results = await ctx.db.query.newsPosts.findMany({
          where: (newsPosts, { eq }) => eq(newsPosts.category, input.category),
          orderBy: (newsPosts, { desc }) => [desc(newsPosts.createdAt)],
        });

        return results;
      } catch (error) {
        console.error("Error fetching news by category:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch news by category",
        });
      }
    }),

  // Create a news post (developers only)
  create: devProcedure
    .input(newsPostSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await currentUser();

        if (!user?.id) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to create a news post",
          });
        }

        // Insert the news post
        await ctx.db.insert(newsPosts).values({
          title: input.title,
          excerpt: input.excerpt,
          content: input.content,
          category: input.category,
          image: input.image ?? "/img1.jpg", // Default image if not provided
          authorName:
            user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : (user.username ?? "Staff"),
          authorId: user.id,
        });

        return {
          success: true,
          message: "News post created successfully",
        };
      } catch (error) {
        console.error("Error creating news post:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create news post",
        });
      }
    }),

  // Update a news post (developers only)
  update: devProcedure
    .input(
      z.object({
        id: z.number(),
        ...newsPostSchema.shape,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const { id, ...updateData } = input;
        const user = await currentUser();

        if (!user?.id) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to update a news post",
          });
        }

        // Check if post exists
        const existingPost = await ctx.db.query.newsPosts.findFirst({
          where: (newsPosts, { eq }) => eq(newsPosts.id, id),
        });

        if (!existingPost) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "News post not found",
          });
        }

        // Update the news post
        await ctx.db
          .update(newsPosts)
          .set({
            title: updateData.title,
            excerpt: updateData.excerpt,
            content: updateData.content,
            category: updateData.category,
            image: updateData.image,
            updatedAt: new Date(),
          })
          .where(eq(newsPosts.id, input.id));

        return {
          success: true,
          message: "News post updated successfully",
        };
      } catch (error) {
        console.error("Error updating news post:", error);
        if (error instanceof TRPCError) throw error;

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update news post",
        });
      }
    }),

  // Delete a news post (developers only)
  delete: devProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await currentUser();

        if (!user?.id) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to delete a news post",
          });
        }
        // Soft delete by updating the published status
        await ctx.db
          .update(newsPosts)
          .set({ published: 0 })
          .where(eq(newsPosts.id, input.id));

        return {
          success: true,
          message: "News post deleted successfully",
        };
      } catch (error) {
        console.error("Error deleting news post:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to delete news post",
        });
      }
    }),
});
