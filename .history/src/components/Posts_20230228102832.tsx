import {api} from "~/utils/api";

export function  Posts (){
    const {data:posts,isLoading,isError}=api.post.all.useQuery()
    if(isLoading){
        return <div>Loading...</div>
    }   
    if(isError){
        return <div>Error</div>
    }
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}