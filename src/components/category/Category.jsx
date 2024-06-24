import { useState } from 'react';
import PropTypes from 'prop-types';
import './Category.css';
import Card from '../card/Card';
import Notification from '../notification/Notification';

const Category = ({ datos, cards, onCardClick, onCardDelete, onCardEdit }) => {
    const { primaryColor, name } = datos;
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const titleStyle = {
        backgroundColor: primaryColor,
    };

    const handleDelete = (cardId, cardTitle) => {
        const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar "${cardTitle}"?`);
        if (confirmDelete) {
            onCardDelete(cardId);
            setNotificationMessage(`"${cardTitle}" eliminado correctamente.`);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                setNotificationMessage('');
            }, 3000); 
        }
    };

    return (
        <>
            {showNotification && <Notification message={notificationMessage} onClose={() => setShowNotification(false)} />}
            {cards && cards.length > 0 && (
                <section className="category">
                    <h3 className='category-title' style={titleStyle}>{name}</h3>
                    <div className="card__container">
                        {cards.map((card) => (
                            <Card 
                                datos={card} 
                                key={card.id}
                                primaryColor={primaryColor}
                                onClick={() => onCardClick(card)}
                                onDelete={() => handleDelete(card.id, card.title)}
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