import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ datos, primaryColor, onClick }) => {
    const { title, photo } = datos;

    return (
        <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
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

