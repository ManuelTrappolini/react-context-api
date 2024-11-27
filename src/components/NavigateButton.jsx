import { useNavigate } from "react-router-dom"
import AppPagination from "./AppPagination"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function NavigateButton({ handlePaginationButtonClick }) {
    const navigate = useNavigate()
    const [post, setPost] = useState()
    const [activePage, setActivePage] = useState()
    const { id } = useParams();




    function handlePaginationButtonClick(e) {



        /* find the url */

        const url = `http://127.0.0.1:3002/posts/${id}`
        console.log(navigate);


        /* fecth data */

        fetch(url)

        /* find out if next wad clicked prev or next */
        const action = e.target.getAttribute('data-action')
        console.log(action);



        if (action === 'prev') {
            /* decrement active page */
            navigate('/posts/' + (parseInt(id) - 1))
            window.location.reload()
        } else {
            /* increment page */
            navigate('/posts/' + (parseInt(id) + 1))
            window.location.reload()
        }
    }




    return (

        <AppPagination prevUrl={post?.info?.prev} nextUrl={post?.info?.next} activePage={activePage} pages={post?.info?.pages} handlePaginationClick={handlePaginationButtonClick} />
    )
}