import Post from './Post'
const PostList = ({posts,postOffset,postLimit,user }) => {

    return(
        <div className='post_wrapper'>
            {  
                posts.slice(postOffset, postOffset + postLimit).map((posts)=>{
                    return (<Post key={posts.id} posts={posts} user={user}/>)
                })
            }
        </div>
    );
}
export default PostList;