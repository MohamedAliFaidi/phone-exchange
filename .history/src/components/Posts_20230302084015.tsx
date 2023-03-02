import {api} from "~/utils/api";
import Post from "./Post";

export default function  Posts (){
    const {data:posts,isLoading,isError}=api.post.all.useQuery()
    if(isLoading){
        return <div>Loading...</div>
    }   
    if(isError){
        return <div>Error</div>
    }
    return (
        <>
        {
            posts.length ? posts.map((post,i)=>{
                return <Post key={i} post={post}/> })
            :<div>no posts yet ...</div>}
        </>
    )
}