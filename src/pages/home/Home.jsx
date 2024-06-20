import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import cardsData from "../../data/CardsData";
import categoryData from "../../data/CategoryData";
import Modal from "../../components/modal/Modal";

function Home() {
    const [cards, setCards] = useState(cardsData);
    const [categories] = useState(categoryData);
    const [bannerCard, setBannerCard] = useState(cards[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);

    const handleCardClick = (card) => {
        setBannerCard(card);
        const bannerElement = document.getElementById('banner');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCardDelete = (cardId) => {
        const updatedCards = cards.filter(card => card.id !== cardId);
        setCards(updatedCards);
        if (bannerCard.id === cardId && updatedCards.length > 0) {
            setBannerCard(updatedCards[0]);
        } else if (updatedCards.length === 0) {
            setBannerCard(null);
        }
    };

    const handleCardEdit = (card) => {
        setCurrentCard(card);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleModalSave = (updatedCard) => {
        const updatedCards = cards.map(card => card.id === updatedCard.id ? updatedCard : card);
        setCards(updatedCards);
        setModalOpen(false);
    };

    return (
        <>
            {bannerCard && <Banner id="banner" card={bannerCard} />}
            {categories.map((category) => (
                <Category
                    datos={category}
                    key={category.id}
                    cards={cards.filter(card => card.team === category.name)}
                    onCardClick={handleCardClick}
                    onCardDelete={handleCardDelete}
                    onCardEdit={handleCardEdit}
                />
            ))}
            <Modal
                card={currentCard}
                isOpen={modalOpen}
                onClose={handleModalClose}
                onSave={handleModalSave}
            />
        </>
    );
}

export default Home;



