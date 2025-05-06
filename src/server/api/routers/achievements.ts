import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  devProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { achievements } from "~/server/db/schema";
import { sql } from "drizzle-orm";

export const achievementsRouter = createTRPCRouter({
  // Fetch all achievements
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const all = await ctx.db.query.achievements.findMany({
        orderBy: (ach, { asc }) => [asc(ach.achievedAt)],
      });
      return all;
    } catch (error) {
      console.error("Error fetching achievements:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch achievements",
      });
    }
  }),

  // Fetch achievements by user
  getByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const userAchievements = await ctx.db.query.achievements.findMany({
          where: (ach, { eq }) => eq(ach.userId, Number(input.userId)),
        });
        return userAchievements;
      } catch (error) {
        console.error("Error fetching user achievements:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch user achievements",
        });
      }
    }),

  // Create a new achievement
  create: devProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.insert(achievements).values({
          name: input.title,
          achieved: false, // Default to not achieved
          userId: Number(input.userId), // Ensure userId is a number
          achievedAt: null, // Default to null
        });
        return { success: true };
      } catch (error) {
        console.error("Error creating achievement:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create achievement",
        });
      }
    }),

  // Track an achievement (insert or ignore if it already exists)
  track: protectedProcedure
    .input(
      z.object({
        userId: z.number().int(),
        name: z.enum([
          "Tutorial completed",
          "no tutorial needed",
          "Each resource hit 100",
          "20 years passed",
          "found the vault",
          "died from starvation/dehydration",
          "reincarnated",
          "unlocking your first technology",
          "technology tree completed",
          "population size 50",
          "population size 100",
          "population size 150",
          "utilize all building slots",
          "unlocking your first building slots",
        ]),
        achieved: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Use raw SQL to handle conflicts
        await ctx.db.execute(
          sql`INSERT INTO achievements (user_id, name, achieved, achieved_at)
              VALUES (${input.userId}, ${input.name}, ${input.achieved}, CURRENT_TIMESTAMP)
              ON DUPLICATE KEY UPDATE achieved = ${input.achieved}, achieved_at = CURRENT_TIMESTAMP`
        );
        return { success: true };
      } catch (error) {
        console.error("Error tracking achievement:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to track achievement",
        });
      }
    }),
});
