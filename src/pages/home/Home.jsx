import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Team from "../../components/category/Category";
import cardsData from "../../data/CardsData";
import teamData from "../../data/TeamData";

function Home() {
    const [cards] = useState(cardsData);
    const [teams] = useState(teamData);

    return (
        <>
            <Banner />
            {teams.map((team) => (
                <Team
                    datos={team}
                    key={team.id}
                    cards={cards.filter(card => card.team === team.name)}
                />
            ))}
        </>
    );
}

export default Home;

