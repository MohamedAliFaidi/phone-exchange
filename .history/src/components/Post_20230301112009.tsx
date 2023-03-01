import type { Post } from "../types";
type PostProps = { post: Post };

export default function Posts({ post }: PostProps) {
  const { id, title, content, published } = post;

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <label className="relative inline-block w-32">
          <input className="absolute h-0 w-0 opacity-0" type="checkbox" />
          <span className="relative inline-block h-8 w-14 rounded-full bg-gray-400 shadow-inner">
            <span className="focus-within:shadow-outline absolute inset-y-0 left-0 block h-6 w-6 rounded-full bg-white shadow"></span>
          </span>
        </label>
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-l text-center text-white">{content}</p>
        <button className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
          delete
        </button>
      </div>
    </>
  );
}
