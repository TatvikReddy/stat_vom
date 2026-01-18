import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  devProcedure,
} from "~/server/api/trpc";
import { features } from "~/server/db/schema";

export const featuresRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const result = await ctx.db.query.features.findMany({
        orderBy: (feat, { asc }) => [asc(feat.id)],
      });
      return result;
    } catch (error) {
      console.error("Error fetching features:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch features",
      });
    }
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      try {
        const feature = await ctx.db.query.features.findFirst({
          where: (feat, { eq }) => eq(feat.id, input.id),
        });
        if (!feature) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Feature not found",
          });
        }
        return feature;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("Error fetching feature:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch feature",
        });
      }
    }),

  create: devProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        image: z.string().url().optional(),
        link: z.string().url(),
        details: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.insert(features).values({
          title: input.title,
          description: input.description,
          image: input.image,
          link: input.link,
          details: input.details,
        });
        return { success: true };
      } catch (error) {
        console.error("Error creating feature:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create feature",
        });
      }
    }),
});
