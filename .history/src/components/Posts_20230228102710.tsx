import {api} from "~/utils/api";

export function  Posts (){
    const {}=api.post.all
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}