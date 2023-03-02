import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";


export const PostType = z.string({
    required_error: "you must provide a post",
}).min(10).max(255);