import PostsCard from "../components/Card/PostsCard.jsx"
import posts from "../data/db.js"


export default function Home() {

    return (
        <>


            <div className="main">
                <h2 className='page-title'>Home Page</h2>
                <div className="container">
                    {posts.map((post, index) => <PostsCard key={index} post={post} />)}
                </div>

            </div>


        </>

    )
}