import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewVideo.css';
import categoryData from '../../data/CategoryData';
import { validateForm } from '../../utils/ValidateForm';
import OptionList from '../../components/optionList/OptionList';

function NewVideo() {
    const initialFormData = {
        title: '',
        team: '',
        photo: '',
        link: '',
        description: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const descriptionRef = useRef(null);
    const navigateTo = useNavigate();

    useEffect(() => {
        const validate = async () => {
            const formErrors = await validateForm(formData);
            setErrors(formErrors);
            setIsButtonDisabled(Object.keys(formErrors).length > 0);
        };
        validate();
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formErrors = await validateForm(formData);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            console.log('Formulario válido. Guardando...', formData);
            navigateTo('/'); // Redirigir a la página principal después de guardar
        }
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    return (
        <main className="container__new-video">
            <section className="new-video__header">
                <h1 className="new-video__title">NUEVO VIDEO</h1>
                <p className="new-video__description">
                    COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
                </p>
            </section>
            <form className="new-video__form" onSubmit={handleSave}>
                <div className="form-section">
                    <div className="form-section__left">
                        <h2 className="new-video__form-title">Crear Tarjeta</h2>
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-section__left">
                        <label className="new-video__form-label">
                            Título:
                            <input
                                className={`new-video__form-input ${errors.title ? 'error' : ''}`}
                                type="text"
                                placeholder='Ingresar título del video'
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                maxLength="200"
                                required
                            />
                            {errors.title && <span className="error-message">{errors.title}</span>}
                        </label>
                    </div>
                    <div className="form-section__right">
                        <OptionList
                            value={formData.team}
                            onChange={(e) => handleChange({ target: { name: 'team', value: e.target.value } })}
                            options={categoryData}
                        />
                        {errors.team && <span className="error-message">{errors.team}</span>}
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-section__left">
                        <label className="new-video__form-label">
                            Imagen:
                            <input
                                className={`new-video__form-input ${errors.photo ? 'error' : ''}`}
                                type="url"
                                placeholder='El enlace es obligatorio'
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                maxLength="200"
                                required
                            />
                            {errors.photo && <span className="error-message">{errors.photo}</span>}
                        </label>
                    </div>
                    <div className="form-section__right">
                        <label className="new-video__form-label">
                            Video:
                            <input
                                className={`new-video__form-input ${errors.link ? 'error' : ''}`}
                                type="url"
                                placeholder='Ingrese el enlace del video'
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                maxLength="200"
                                required
                            />
                            {errors.link && <span className="error-message">{errors.link}</span>}
                        </label>
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-section__left">
                        <label className="new-video__form-label">
                            Descripción:
                            <textarea
                                className={`new-video__form-input new-video__form-textarea ${errors.description ? 'error' : ''}`}
                                name="description"
                                placeholder='¿De qué se trata este vídeo?'
                                value={formData.description}
                                onChange={handleChange}
                                ref={descriptionRef}
                                rows="4" 
                                maxLength="500"
                                required
                            />
                            {errors.description && <span className="error-message">{errors.description}</span>}
                        </label>
                    </div>
                </div>
                <div className="new-video__form-buttons">
                    <button
                        type="submit"
                        className="new-video__form-button new-video__form-button--save"
                        disabled={isButtonDisabled}
                    >
                        GUARDAR
                    </button>
                    <button
                        type="button"
                        className="new-video__form-button new-video__form-button--cancel"
                        onClick={handleCancel}
                    >
                        CANCELAR
                    </button>
                </div>
            </form>
        </main>
    );
}

export default NewVideo;
