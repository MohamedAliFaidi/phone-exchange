import {api} from "~/utils/api";

export function  Posts (){
    const {data:posts,isLoading}=api.post.all.useQuery()
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}