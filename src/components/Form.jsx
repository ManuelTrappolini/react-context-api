import { useState } from "react"

const emptyPost = {
    title: "",
    image: "",
    content: "",
    tags: '',
    published: false,
}


export default function Form({ handleFormField, handleFormSubmit }) {

    const [formData, setFormData] = useState(emptyPost)




    function handleFormField(e) {
        //console.log(e.target);

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setFormData({
            ...formData,
            [e.target.name]: value

        })

    }






    return (

        <form onSubmit={handleFormSubmit}>




            <div className="input-group mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Recipient's title"
                    aria-label="Recipient's title"
                    aria-describedby="titlehelper"
                    value={formData.title}
                    name='title'
                    id='title'
                    onChange={handleFormField}

                />
                <input type="text"
                    className="form-control"
                    placeholder="Recipient's tags"
                    aria-label="Recipient's tags"
                    aria-describedby="tagshelper"
                    value={formData.tags}
                    name='tags'
                    id='tags'
                    onChange={handleFormField}


                />
                <input type="text"
                    className="form-control"
                    placeholder="Recipient's image"
                    aria-label="Recipient's image"
                    aria-describedby="imagehelper"
                    value={formData.image}
                    name='image'
                    id='image'
                    onChange={handleFormField}
                />


                <textarea type="text" className="form-control"
                    placeholder="Recipient's content"
                    aria-label="Recipient's content"
                    aria-describedby="contenthelper"
                    value={formData.content}
                    name='content'
                    id='content'
                    onChange={handleFormField}
                />


                <button className='btn btn-outline-secondary' type='submit' onClick={handleFormSubmit}> Click ME</button>
            </div>
            <div className="form-check m-3">
                <input
                    id="published"
                    name='published'
                    type="checkbox"
                    className="form-check-input"
                    value={formData.published}
                    onChange={handleFormField}

                />
                <label className="form-check-label" htmlFor=""> Published </label>
            </div>



        </form>


    )
}