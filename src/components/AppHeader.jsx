import MainMenu from "./MainMenu"
import { Link } from "react-router-dom"
export default function AppHeader() {

    return (
        <header>

            <Link className="text-decoration-none" to='/'><h1 className="text-white">Posts List</h1></Link>
            <MainMenu />

        </header>
    )
}