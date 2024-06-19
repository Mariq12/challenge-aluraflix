import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import cardsData from "../../data/CardsData";
import categoryData from "../../data/CategoryData";

function Home() {
    const [cards, setCards] = useState(cardsData);
    const [categories] = useState(categoryData);
    const [bannerCard, setBannerCard] = useState(cards[0]); 

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
                />
            ))}
        </>
    );
}

export default Home;



