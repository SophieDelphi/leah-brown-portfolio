import { createTRPCRouter } from "~/server/api/trpc";
import { productionRouter } from "./routers/production";
import { pictureRouter } from "./routers/picture";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  production: productionRouter,
  picture: pictureRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
