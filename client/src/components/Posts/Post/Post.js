
// right now it is random image
// will modify it to accept response from backend 
const Post = ({ post }) => {
    const randomImageURL = `https://source.unsplash.com/random/1600x900?sig=${post.id}`;

    return (
        <div class="card m-1">
            <div class="card-body">
                <div class="row m-1">
                    <h4 class="col-6">
                        User
                    </h4>
                    <p class="col-6">
                        {post.id} days ago
                    </p>
                </div>
                <p class="card-text">
                    This is example text of tweet with id = {post.id} and text = { post.text }.
                </p>
            </div>
            <img src={randomImageURL} alt="media" />
            <a href="https://www.twitter.com" class="stretched-link"> </a>
        </div>
    );
}

export default Post;