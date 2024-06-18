import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';


const Card = (props) => {
    const { title,  photo, link } = props.datos; 
    const { primaryColor } = props;

    return (
        <Link to={link} className="card">
            <figure className="card__header" style={{ backgroundColor: primaryColor }}>
                <img src={photo} alt={title} />
            </figure>
        </Link>
    );
};

Card.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    datos: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
