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
            <h1>{posts.length ?  posts.map((post , i)=>{

            })}</h1>
        </div>
    )
}