import styles from "./Banner.module.css";
import banner from "../../assets/banner.jpg";

function Banner() {
    return (
        <div className={styles.layer}
            style={{ backgroundImage: `url(${banner})`}}
        >
            <div className={styles.gradient}>
                
            </div>
        </div>
    );
}

export default Banner;