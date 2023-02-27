import { z } from "zod";

export const Post = z.string({
    required_error: "you must provide a post",
}).min(10).max(255);