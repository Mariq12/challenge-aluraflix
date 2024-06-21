import Footer from "../components/footer/Footer.jsx";
import FooterBar from "../components/footerBar/FooterBar.jsx";
import Header from "../components/header/Header.jsx";
import Home from "../pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewVideo from "../pages/newVideo/NewVideo.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="newVideo" element={<NewVideo />}></Route>
            </Routes>
            <Footer />
            <FooterBar />
        </BrowserRouter>
    );
}

export default AppRoutes;
