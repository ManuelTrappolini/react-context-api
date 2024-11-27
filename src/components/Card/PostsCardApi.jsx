

export default function AppCardApi({ handleDeleteClick, post }) {
    console.log('ciao', post);


    /* if (!post || !post.title || !post.content) {
        return <p>Post data is missing or incomplete</p>;
    } */





    return (
        <>

            <div className="col" key={post.id} >
                <div className="card m-3">
                    <li className='m-2'><h3>{post.title}:</h3></li>
                    <li className='m-2'><img src={`http://127.0.0.1:3002/${post.image}`} height={250} width={250} alt="" /></li>
                    <li className='m-2'>{post.content}</li>
                    <li className='m-2'><span className='tags'>{`${post.tags} ${" "} `}</span> </li>
                    <button onClick={handleDeleteClick} data-id={post.id} className='btn btn-danger mb-3 mt-3'>Delete Post</button>


                </div>
            </div>

        </>
    )
}