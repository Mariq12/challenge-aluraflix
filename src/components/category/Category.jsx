import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Category = (props) => {
    const { title, team,  photo, link } = props.datos; 
    const { primaryColor } = props;

    return (
        <Link to={link} className="category">
            <figure className="category__header" style={{ backgroundColor: primaryColor }}>
                <img src={photo} alt={title} />
                <figcaption className="info">
                    <h4>{title}</h4>
                    <h5>{team}</h5>
                </figcaption>
            </figure>
        </Link>
    );
};

Category.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    datos: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default Category;
