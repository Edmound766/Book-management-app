import NavBar from "@/components/navbar/nav-bar.tsx";
import {Outlet, useLocation} from "react-router";

export default function Layout() {
    const location = useLocation()
    const isAuthPage = location.pathname === "/register" || location.pathname === "/login";
    return (
        <>
            {!isAuthPage && (<header>
                <NavBar/>
            </header>)}
            <main >
                <Outlet/>
            </main>
            <footer></footer>
        </>
    )
}
