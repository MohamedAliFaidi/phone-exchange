import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import type  { AppRouter } from "./server/api/root";

export type RouterOutputs = inferRouterOutputs<AppRouter>;
export type AllPostsOutputs = RouterOutputs["post"]["all"];
export type Post = AllPostsOutputs[number];



export const PostType = z.string({
    required_error: "you must provide a post",
}).min(10).max(255);


