import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  all: protectedProcedure.query(() => {
    return [
      {
        id: "fakeId",
        title: "fakeText",
        content: "fakeText",
        published: false
      },
      {
        id: "fakeId",
        title: "fakeText",
        content: "fakeText",
        published: true
      },   {
        id: "fakeId",
        title: "fakeText",
        content: "fakeText",
        published: true
      },
    ];
  }),
});
