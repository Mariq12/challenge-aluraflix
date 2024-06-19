import PropTypes from 'prop-types';
import './Card.css';
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";

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
                <figcaption className="card__icons">
                    <div className="card__icon-wrapper">
                        <RiDeleteBin2Line className="card__icon" />
                        <span className="card__icon-text">Eliminar</span>
                    </div>
                    <div className="card__icon-wrapper">
                        <RiEdit2Line className="card__icon" />
                        <span className="card__icon-text">Editar</span>
                    </div>
                </figcaption>
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

