import { useState } from "react";
import { Post } from "~/types";


export default function CreatePost() {
 const [newPost,setNewPost]=useState({
        title:"",
        content:"",
        published:false
 })

  return (
    <>
      <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
        <h3 className="text-xl font-bold">Create Post</h3>
        <form 
        onSubmit={(e)=>{
            e.preventDefault()

        
        
        }}
        className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="title"
            className="rounded-lg bg-white/10 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            value={newPost.title}
          />
          <textarea
           value={newPost.content}
            placeholder="content"
            className="rounded-lg bg-white/10 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          />
          <button className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
