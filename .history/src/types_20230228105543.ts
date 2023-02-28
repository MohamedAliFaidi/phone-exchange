import { z } from "zod";

export const PostType = z.string({
    required_error: "you must provide a post",
}).min(10).max(255);
import 