import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./HeaderLink.module.css";


function HeaderLink({ url, children }) {
    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
        >
            {children}
        </NavLink>
    );
}

HeaderLink.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default HeaderLink;
