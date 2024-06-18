import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Team from "../../components/team/Team";
import categoriesData from "../../data/CategoryData";
import teamData from "../../data/TeamData";

function Home() {
    const [categories] = useState(categoriesData);
    const [teams] = useState(teamData);

    return (
        <>
            <Banner />
            {teams.map((team) => (
                <Team
                    datos={team}
                    key={team.id}
                    categories={categories.filter(category => category.team === team.name)}
                />
            ))}
        </>
    );
}

export default Home;

