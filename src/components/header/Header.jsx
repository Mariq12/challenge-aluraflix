import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderLink from "../headerLink/HeaderLink";
import { IoMenu } from "react-icons/io5";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" />
                </section>
            </Link>
            <nav className={styles.nav}>
            <IoMenu className={styles.menuIcon} onClick={toggleMenu} />
                <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
                    <HeaderLink url="./">INICIO</HeaderLink>
                    <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;