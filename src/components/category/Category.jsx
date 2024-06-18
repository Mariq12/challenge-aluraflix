import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Category.css';


const Category = (props) => {
    const { title,  photo, link } = props.datos; 
    const { primaryColor } = props;

    return (
        <Link to={link} className="category">
            <figure className="category__header" style={{ backgroundColor: primaryColor }}>
                <img src={photo} alt={title} />
            </figure>
        </Link>
    );
};

Category.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    datos: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default Category;
