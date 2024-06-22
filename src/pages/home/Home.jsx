import { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import Modal from "../../components/modal/Modal";
import categoryData from "../../data/CategoryData";
import './Home.module.css';

function Home() {
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [bannerCard, setBannerCard] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [categoryLookup, setCategoryLookup] = useState({});

    useEffect(() => {
        setCategories(categoryData);
    }, []);

    // Cargar videos desde la API
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Mariq12/api-challengue-aluraflix/videos")
            .then(response => response.json())
            .then(data => {
                setCards(data);
                if (data.length > 0) {
                    setBannerCard(data[0]); // Configurar el primer bannerCard inicialmente
                }
            })
            .catch(error => console.error("Error fetching data from API:", error));
    }, []);

    // Construir categoryLookup a partir de categories
    useEffect(() => {
        const lookup = {};
        categories.forEach(category => {
            lookup[category.name] = category;
        });
        setCategoryLookup(lookup);
    }, [categories]);

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
        if (bannerCard && bannerCard.id === cardId && updatedCards.length > 0) {
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
        <div className="home-container">
            {bannerCard && <Banner card={bannerCard} categoryLookup={categoryLookup} />}
            {categories.map(category => (
                <Category
                    key={category.id}
                    datos={category}
                    cards={cards.filter(card => card.category === category.name)}
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
        </div>
    );
}

export default Home;
