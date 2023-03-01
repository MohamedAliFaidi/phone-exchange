import { api } from "~/utils/api";
import Post from "./Post";

export function Posts() {
  const { data: posts, isLoading, isError } = api.post.all.useQuery();
  if (isLoading) {
    return (
      <div className="mt-10 h-12 w-full bg-gray-400 text-center text-3xl font-bold tracking-wider text-white">
        Loading...
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      {posts.length ? (
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      ) : (
        <div>no posts yet ...</div>
      )}
    </>
  );
}
