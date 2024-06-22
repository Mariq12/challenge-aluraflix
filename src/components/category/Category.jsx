import PropTypes from 'prop-types';
import './Category.css';
import Card from '../card/Card';

const Category = ({ datos, cards, onCardClick, onCardDelete, onCardEdit }) => {
    const { primaryColor, name } = datos;

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
                                onClick={() => onCardClick(card)}
                                onDelete={() => onCardDelete(card.id)}
                                onEdit={() => onCardEdit(card)}
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
            link: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    onCardClick: PropTypes.func.isRequired,
    onCardDelete: PropTypes.func.isRequired,
    onCardEdit: PropTypes.func.isRequired,
};

export default Category;
