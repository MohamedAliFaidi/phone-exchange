import type { Post } from "../types";
type PostProps = { post: Post };

export default function Posts({ post }: PostProps) {
  const { id, title, content, published } = post;

  return (
    <>
    <div className="p-4 flex items-center justify-center">
  <label className="relative inline-block w-32">
    <input className="absolute opacity-0 w-0 h-0" type="checkbox" />
    <span className="relative inline-block w-14 h-8 bg-gray-400 rounded-full shadow-inner">
      <span className="absolute block w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline"></span>
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
