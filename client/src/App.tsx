import {BrowserRouter as Router, Route, Routes} from "react-router";
import Home from "@/pages/HomePage.tsx";
import Layout from "@/layout.tsx";
import SigningPage from "@/pages/auth/signin.tsx";
import RegisterPage from "@/pages/auth/register.tsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                        <Route index element={<Home/>} />
                        <Route path={"/register"} element={<RegisterPage/>} />
                        <Route path={"/login"} element={<SigningPage/>} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
