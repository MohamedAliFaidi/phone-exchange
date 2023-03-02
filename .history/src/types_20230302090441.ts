import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import type  { AppRouter } from "./server/api/root";

export type RouterOutputs = inferRouterOutputs<AppRouter>;
export type AllPostsOutputs = RouterOutputs["post"]["all"];
export type Post = AllPostsOutputs[number];



export const PostType = z.object({
    required_error: "you must provide a post",
}).shape({
    title: z.string(),
    content: z.string(),
})


