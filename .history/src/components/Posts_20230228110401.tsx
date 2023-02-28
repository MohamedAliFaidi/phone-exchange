import {api} from "~/utils/api";
import {Post} from "~/components/Post";

export function  Posts (){
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
            posts.length ? posts.map(post=>{
                return <Post key={post.id} post={post}/> })
            :<div>no posts yet ...</div>}
        </>
    )
}