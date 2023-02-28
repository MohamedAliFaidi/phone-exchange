import { z } from "zod";


import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { PostType } from "~/types";

export const postRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });

    console.log(
      "prisma posts",
      posts.map(({ id, title, content, published }) => ({
        id,
        title,
        content,
        published,
      }))
    );

    return [
      {
        id: "fakeId",
        title: "fakeText",
        content: "fakeText",
        published: false,
      },
      {
        id: "fakeId",
        title: "fakeText",
        content: "fakeText",
        published: true,
      },
      {
        id: "fakeId",
        title: "fakeText",
        content: "fakeText",
        published: true,
      },
    ];
  }),
  create: protectedProcedure
    .input(PostType)
    .mutation(async ({ ctx, input }) => {
      ctx.prisma.post.create({
        data: {
          content: input,
          title: input,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      ctx.prisma.post.delete({
        where: {
          id: input,
        },
      });
    }),
  toggle: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input: { id, published } }) => {
      return ctx.prisma.post.update({
        where: {
          id,
        },
        data: {
          published,
        },
      });
    }),
});
