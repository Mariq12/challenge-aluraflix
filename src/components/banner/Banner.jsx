import PropTypes from 'prop-types';
import styles from "./Banner.module.css";
import categoryData from "../../data/CategoryData";
import banner from "../../assets/banner.jpg";

const categoryLookup = categoryData.reduce((acc, category) => {
    acc[category.name] = category;
    return acc;
}, {});

function Banner({ card }) {
    const { name, primaryColor } = categoryLookup[card.team];

    const titleStyle = {
        borderColor: primaryColor,
        color: primaryColor,
    };

    return (
        <main id="banner" className={styles.layer} style={{ backgroundImage: `url(${banner})` }}>
            <div className={styles.gradient}></div>
            <section className={styles.content}>
                <h1 className={styles.name} style={titleStyle}>{name}</h1>
                <h2 className={styles.title}>{card.title}</h2>
                <p className={styles.subtitle}>{card.description}</p>
            </section>
            <section className={styles.container} style={{ borderColor: primaryColor, borderStyle: 'solid', borderWidth: '2px' }}>
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
        team: PropTypes.string.isRequired,
    }).isRequired,
};

export default Banner;
