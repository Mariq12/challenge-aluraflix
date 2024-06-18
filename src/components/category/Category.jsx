import PropTypes from 'prop-types';
import './Category.css';
import Card from '../card/Card';

const Category = (props) => {
  const { cards } = props;
  const { primaryColor, name } = props.datos;

  const titleStyle = {
    borderColor: primaryColor,
    color: primaryColor
  };

  return (
    <>
      {cards && cards.length > 0 && (
        <section className="category">
          <h3 style={titleStyle}>{name}</h3>
          <div className="card__container">
            {cards.map((card) => (
              <Card 
                datos={card} 
                key={card.id}
                primaryColor={primaryColor} 
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

Category.propTypes = {
  datos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Category;
