import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  devProcedure,
} from "~/server/api/trpc";
import { achievements } from "~/server/db/schema";

export const achievementsRouter = createTRPCRouter({
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

  getByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const user = await ctx.db.query.achievements.findMany({
          where: (ach, { eq }) => eq(ach.userId, input.userId),
        });
        return user;
      } catch (error) {
        console.error("Error fetching user achievements:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch user achievements",
        });
      }
    }),

  create: devProcedure
    .input(
      z.object({ title: z.string(), description: z.string(), userId: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.insert(achievements).values({
          title: input.title,
          description: input.description,
          userId: input.userId,
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
});
