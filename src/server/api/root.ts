import { postRouter } from "~/server/api/routers/post";
import { explorationRouter } from "~/server/api/routers/exploration";
import { newsRouter } from "~/server/api/routers/news";
import { featuresRouter } from "~/server/api/routers/features";
import { analyticsRouter } from "~/server/api/routers/analytics";
import { achievementsRouter } from "~/server/api/routers/achievements";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  exploration: explorationRouter,
  news: newsRouter,
  features: featuresRouter,
  analytics: analyticsRouter,
  achievements: achievementsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
