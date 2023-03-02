import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./server/api/root";

export type RouterOutputs = inferRouterOutputs<AppRouter>;
export type AllPostsOutputs = RouterOutputs["post"]["all"];
export type Post = AllPostsOutputs[number];

export const PostType = z.object({
  title: z.string({
    required_error: "Title is required",
  }).max(100, "Title must be less than 100 characters").min(1, "Title must be at least 1 character"),
  content: z.string({
    required_error: "Content is required",
  }).max(1000, "Content must be less than 1000 characters").min(1, "Content must be at least 1 character"),
  published: z.boolean(),
});
