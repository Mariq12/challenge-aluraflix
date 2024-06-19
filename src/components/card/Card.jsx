import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ datos, primaryColor, onClick }) => {
    const { title, photo } = datos;

    const handleClick = () => {
        onClick();
        const bannerElement = document.getElementById('banner');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <figure className="card__header" style={{ backgroundColor: primaryColor }}>
                <img src={photo} alt={title} />
            </figure>
        </div>
    );
};

Card.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    datos: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;

