import { useParams } from "react-router-dom"

export default function AppPagination({ prevUrl, nextUrl, handlePaginationClick }) {

    const { id } = useParams();

    return (

        <div className="pagination" >

            {
                <button type='button'
                    className='prev'
                    onClick={handlePaginationClick}
                    data-url={prevUrl}
                    data-action="prev"
                >
                    Prev
                </button>}


            <span className='id-counter'>
                <span>
                    {`${id}`} </span>
                <span>of </span>
                <span>
                    6 </span>
            </span>



            {
                <button
                    type='button'
                    className='next'
                    onClick={handlePaginationClick}
                    data-url={nextUrl}
                    data-action="next"
                >
                    Next
                </button>}

        </div>
    )
}