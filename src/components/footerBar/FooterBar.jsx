import { Link, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import './FooterBar.css';

function FooterBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isNewVideoPage = location.pathname === "/newVideo";

    return (
        <div className="footer-bar">
            {isHomePage && (
                <>
                    <Link to="/" className="footer-icon">
                        <button className="icon">
                            <IoHome className="icon-home" />
                            <p>INICIO</p>
                        </button>
                    </Link>
                    <Link to="/newVideo" className="footer-icon">
                        <IoMdAddCircleOutline className="icon-add" />
                    </Link>
                </>
            )}
            {isNewVideoPage && (
                <>
                    <Link to="/" className="footer-icon">
                        <IoHome className="icon-home" />
                    </Link>
                    <Link to="/newVideo" className="footer-icon">
                        <button className="icon">
                            <IoMdAddCircleOutline className="icon-add" />
                            <p>NUEVO VIDEO</p>
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default FooterBar;
