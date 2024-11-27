import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Form from '../components/Form'
import AppCardApi from '../components/Card/PostsCardApi'

const emptyPost = {
    title: "",
    image: "",
    content: "",
    tags: '',
    published: false,
}




export default function PostsPage({ handleFormField, handleFormSubmit }) {



    const { id } = useParams();


    const [formData, setFormData] = useState(emptyPost)
    const [posts, setPosts] = useState('')
    const [postsData, setPostsData] = useState({})



    function handleClick(e) {
        fetchData()
    }

    function fetchData(url = 'http://127.0.0.1:3002') {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setPostsData(data)

            })
    }

    useEffect(fetchData, [])

    function handleFormSubmit(e) {

        e.preventDefault()
        console.log('Form sent', formData);

        const newItem = {
            id: Date.now(),
            ...formData
        }


        setPosts([
            ...posts,
            newItem
        ])

        setFormData(emptyPost)


        const url = `http://127.0.0.1:3002/posts/`;

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: formData.title,
                content: formData.content,
                tags: formData.tags,
                image: formData.image
            })
        })
            .then((res) => res.json())
            .then(data => {
                setPostsData(data)

            })
    }


    function handleDeleteClick(id) {
        console.log('clicked', postsData);
        id.preventDefault()

        const postIndexToTrash = Number(id.target.getAttribute('data-id'))
        console.log(postIndexToTrash);
        console.log('form data:', postsData.data.id);



        fetch(`http://127.0.0.1:3002/posts/${postIndexToTrash}`, {

            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPostsData(data)

            })
    }


    function handleFormField(e) {
        //console.log(e.target);

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setFormData({
            ...formData,
            [e.target.name]: value

        })

    }





    return (
        <>

            <div className="containter pt-3">
                <h2 className='page-title pb-5 '>Posts' List</h2>

                <Form handleFormField={handleFormField} handleFormSubmit={handleFormSubmit} />

                <ul>
                    {postsData.data ? postsData.data.map((post, id) => (
                        <AppCardApi key={post.id}
                            handleDeleteClick={handleDeleteClick}
                            post={post}

                        />
                    )) : <p>no result yet</p>
                    }
                </ul >
            </div >
        </>
    )
}

