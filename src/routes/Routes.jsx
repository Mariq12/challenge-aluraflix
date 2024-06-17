import Header from "../components/header/Header.jsx";
import Home from "../pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                    <Route index element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
