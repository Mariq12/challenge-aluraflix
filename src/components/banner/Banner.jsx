import styles from "./Banner.module.css";
import banner from "../../assets/banner.jpg";

function Banner() {
    return (
        <div className={styles.layer}
            style={{ backgroundImage: `url(${banner})`}}
        >
            
            <div className={styles.gradient}>
                
            </div>
            <section className={styles.content}>
                <h1 className={styles.title}>Welcome to our store</h1>
                <p className={styles.subtitle}>The best place to buy your favorite products</p>
            </section>
        </div>
    );
}

export default Banner;