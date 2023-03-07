import { useSession } from "next-auth/react";
import CreatePost from "~/components/posts/CreatePost";
import Posts from "~/components/posts/Posts";

const PostsPage = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425973864910669"
          crossOrigin="anonymous"
        ></script>
      </head>
      {sessionData && (
        <div className="grid grid-cols-1 gap-4 md:gap-8">
          <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
            <h3 className="text-xl font-bold">Posts</h3>
            <Posts />
          </div>
          <CreatePost />
        </div>
      )}
    </>
  );
};

export default PostsPage;
