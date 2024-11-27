import { Link } from "react-router-dom";


export default function NotFound() {


    return (
        <>
            <h2 className="text-center bg-grey">🤷‍♂️404 Not Found 🤷‍♂️ <Link to='/' className="btn  btn-primary">Back to Home</Link></h2 >

        </>
    )
}