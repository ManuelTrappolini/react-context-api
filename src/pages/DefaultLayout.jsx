import AppHeader from "../components/AppHeader"
import { Outlet } from "react-router-dom"
import AppFooter from "../components/AppFooter"


export default function DefaultLayout() {

    return (
        <>
            <AppHeader />



            <Outlet />



            <AppFooter />


        </>
    )
}