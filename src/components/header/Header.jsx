import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import HeaderLink from "../headerLink/HeaderLink";

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/>
                </section>
            </Link>
            <nav className={styles.nav}>
                <HeaderLink url="./">INICIO</HeaderLink>
                <HeaderLink url="./favorites">NUEVO VIDEO</HeaderLink>
            </nav>
        </header>
    )
}

export default Header;