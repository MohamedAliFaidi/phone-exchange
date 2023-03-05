import type { Post } from "../../types";
type PostProps = { post: Post };

export default function Posts({ post }: PostProps) {
  const {  title, content, published } = post;

  return (
    <>
    <div className="flex gap-2 items-center">
					<input
						className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
						type="checkbox" name="published" id="published"
            checked={published}
            onChange={() =>console.log('change')}
					
					/>
					<label htmlFor="published" className={`cursor-pointer}`}>
						{content}
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
