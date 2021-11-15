import Post from './Post/Post';

const Posts = () => {
    const posts = [
        { id: 1, text: "example1" },
        { id: 2, text: "example2" },
        { id: 3, text: "example3" },
        { id: 4, text: "example4" },
    ];  // an example, can be modified to accpet data from response
    
    return (
        <div class="row">
            {posts.map((post) => (
                <div class="container col-xs-12 col-sm-6">
                    <Post post={post}/>
                </div>
            ))}
        </div>
    );

}

export default Posts;