import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import cardsData from "../../data/CardsData";
import categoryData from "../../data/CategoryData";

function Home() {
    const [cards] = useState(cardsData);
    const [categories] = useState(categoryData);

    return (
        <>
            <Banner />
            {categories.map((team) => (
                <Category
                    datos={team}
                    key={team.id}
                    cards={cards.filter(card => card.team === team.name)}
                />
            ))}
        </>
    );
}

export default Home;

