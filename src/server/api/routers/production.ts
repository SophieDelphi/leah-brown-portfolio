import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productionRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.production.findMany();
  }),
  // findById: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.production.findMany({
  //     where: {
  //       id: z.string(),
  //     },
  //   });
  // }),
});
