import PropTypes from 'prop-types';
import styles from "./Banner.module.css";

function Banner({ card }) {
    return (
        <main className={styles.layer} style={{ backgroundImage: `url(${card.photo})` }}>
            <div className={styles.gradient}></div>
            <section className={styles.content}>
                <h1 className={styles.title}>{card.title}</h1>
                <p className={styles.subtitle}>{card.description}</p>
            </section>
            <section className={styles.container}>
                <iframe
                    src={card.link}
                    title={card.title}
                    className={styles.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </main>
    );
}

Banner.propTypes = {
    card: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Banner;
