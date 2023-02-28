import type { Post } from "../types";
type PostProps = { post: Post };

export function Posts({ post }: PostProps) {
  const { id, title, content, published } = post;

  return (
    <>
      <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-l text-center text-white">{content}</p>
        <p className="text-l text-center text-white">{published}</p>
      </div>
    </>
  );
}
