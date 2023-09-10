import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pictureRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.picture.findMany();
  }),
  // getAllByProduction: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.picture.findMany({
  //     where: {
  //       productionId: z.string(),
  //     },
  //   });
  // }),
});
