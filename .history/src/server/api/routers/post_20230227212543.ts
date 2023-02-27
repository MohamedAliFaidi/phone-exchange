import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ctx}) => {
    const posts = await ctx.prisma.post.findMany({
        where: {
           userId: ctx.session.user.id
        },
    });

return posts.map(({id,title,content,published  }) => (({id,title,content,published})));
    

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
