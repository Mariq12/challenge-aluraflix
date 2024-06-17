import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import HeaderLink from "../headerLink/HeaderLink";
import { IoMenu } from "react-icons/io5";

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/>
                </section>
            </Link>
            <nav className={styles.nav}>
                <div className={styles.navLinks}>
                    <HeaderLink url="./">INICIO</HeaderLink>
                    <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
                </div>
                <IoMenu className={styles.menuIcon} />
            </nav>
        </header>
    )
}

export default Header;
