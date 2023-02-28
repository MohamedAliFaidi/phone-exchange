
export function  Posts (){
   
    return (
        <>
        {
            posts.length ? posts.map(post=>{
                return <Post key={post.id} post={post}/> })
            :<div>no posts yet ...</div>}
        </>
    )
}