import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import cardsData from "../../data/CardsData";
import categoryData from "../../data/CategoryData";

function Home() {
    const [cards] = useState(cardsData);
    const [categories] = useState(categoryData);
    const [bannerCard, setBannerCard] = useState(cards[0]); 

    const handleCardClick = (card) => {
        setBannerCard(card);
    };

    return (
        <>
            <Banner card={bannerCard} />
            {categories.map((category) => (
                <Category
                    datos={category}
                    key={category.id}
                    cards={cards.filter(card => card.team === category.name)}
                    onCardClick={handleCardClick}
                />
            ))}
        </>
    );
}

export default Home;



