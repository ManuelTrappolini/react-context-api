
export default function PostsCard({ post }) {
    const colors = {
        html: "red",
        css: "blue",
        js: "grey",
        php: "pink"
    }

    {
        if (post.published === false) {
            return null
        }
    }



    return (
        <div className="container-card">
            <div className="posts-card col-6" >
                <img className="card-img" src={post.image} alt="" />
                <div className="card-body">
                    <h3 className="title"><span>Title: </span>{post.title} </h3>
                    <div className="content" ><span><strong>Content:</strong> </span>{post.content}</div>
                    <div className="tags" >
                        {post.tags.map((tag, index) => <a
                            href="#" key={index} style={{ color: colors[tag] }}>{tag}  {''}
                        </a>)}

                    </div>

                </div>

            </div>
        </div >


    )
}