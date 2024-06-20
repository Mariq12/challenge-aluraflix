import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import './FooterBar.css';

function FooterBar() {
    return (
        <div className="footer-bar">
            <Link to="/" className="footer-icon">
                <button className="icon">
                    <IoHome className="icon-home" />
                    <p>Inicio</p>
                </button>
            </Link>
            <Link to="/newVideo" className="footer-icon">
                <IoMdAddCircleOutline className="icon-add" />
            </Link>
        </div>
    );
}

export default FooterBar;
