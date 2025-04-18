import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  devProcedure,
} from "~/server/api/trpc";
import { analytics } from "~/server/db/schema";

export const analyticsRouter = createTRPCRouter({
  getByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const records = await ctx.db.query.analytics.findMany({
          where: (rec, { eq }) => eq(rec.userId, input.userId),
          orderBy: (rec, { asc }) => [asc(rec.id)],
        });
        return records;
      } catch (error) {
        console.error("Error fetching analytics:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch analytics records",
        });
      }
    }),

  create: devProcedure
    .input(
      z.object({
        userId: z.string(),
        key: z.string(),
        value: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.insert(analytics).values({
          userId: input.userId,
          key: input.key,
          value: input.value,
        });
        return { success: true };
      } catch (error) {
        console.error("Error creating analytics record:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create analytics record",
        });
      }
    }),
});
