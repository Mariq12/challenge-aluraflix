import PropTypes from 'prop-types';
import './Team.css';
import Category from '../category/Category';

const Team = (props) => {
  const { categories } = props;
  const { primaryColor, name } = props.datos;

  const titleStyle = {
    borderColor: primaryColor,
    color: primaryColor
  };

  return (
    <>
      {categories && categories.length > 0 && (
        <section className="team">
          <h3 style={titleStyle}>{name}</h3>
          <div className="category__container">
            {categories.map((category) => (
              <Category 
                datos={category} 
                key={category.id}
                primaryColor={primaryColor} 
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

Team.propTypes = {
  datos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired, // Asegúrate de que cada categoría tenga una `key` única
    })
  ).isRequired,
};

export default Team;
