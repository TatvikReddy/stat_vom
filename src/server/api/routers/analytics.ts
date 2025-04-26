import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  devProcedure,
} from "~/server/api/trpc";
import { analytics } from "~/server/db/schema";
import { eq } from "drizzle-orm"; // Adjust the import path if necessary

export const analyticsRouter = createTRPCRouter({
  // Fetch analytics records for a specific user
  getByUser: publicProcedure
    .input(z.object({ userId: z.number().int() }))
    .query(async ({ ctx, input }) => {
      try {
        const records = await ctx.db.query.analytics.findMany({
          where: (rec, { eq }) => eq(rec.userId, input.userId),
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

  // Update analytics for a specific user
  update: devProcedure
    .input(
      z.object({
        userId: z.number().int(),
        longestSurvived: z.number().optional(),
        shortestSurvived: z.number().optional(),
        mostFood: z.number().optional(),
        mostMaterial: z.number().optional(),
        mostPower: z.number().optional(),
        mostPopulation: z.number().optional(),
        leastFood: z.number().optional(),
        leastMaterial: z.number().optional(),
        leastPower: z.number().optional(),
        leastPopulation: z.number().optional(),
        reincarnatedTimes: z.number().optional(),
        vaultFoundTimes: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        interface AnalyticsUpdateInput {
          longestSurvived?: number;
          shortestSurvived?: number;
          mostFood?: number;
          mostMaterial?: number;
          mostPower?: number;
          mostPopulation?: number;
          leastFood?: number;
          leastMaterial?: number;
          leastPower?: number;
          leastPopulation?: number;
          reincarnatedTimes?: number;
          vaultFoundTimes?: number;
        }

        await ctx.db
          .update(analytics)
          .set({
            longestSurvived: input.longestSurvived,
            shortestSurvived: input.shortestSurvived,
            mostFood: input.mostFood,
            mostMaterial: input.mostMaterial,
            mostPower: input.mostPower,
            mostPopulation: input.mostPopulation,
            leastFood: input.leastFood,
            leastMaterial: input.leastMaterial,
            leastPower: input.leastPower,
            leastPopulation: input.leastPopulation,
            reincarnatedTimes: input.reincarnatedTimes,
            vaultFoundTimes: input.vaultFoundTimes,
          } as AnalyticsUpdateInput)
          .where(eq(analytics.userId, input.userId));
        return { success: true };
      } catch (error) {
        console.error("Error updating analytics record:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update analytics record",
        });
      }
    }),
});