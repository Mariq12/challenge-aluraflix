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
    const [touchedFields, setTouchedFields] = useState({
        title: false,
        team: false,
        photo: false,
        link: false,
        description: false,
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const descriptionRef = useRef(null);
    const navigateTo = useNavigate();

    useEffect(() => {
        validateFormAndSetErrors();
    }, [formData]);

    const validateFormAndSetErrors = async () => {
        const formErrors = await validateForm(formData);
        setErrors(formErrors);
        setIsButtonDisabled(Object.keys(formErrors).length > 0 || !isFormFilled(formData));
    };

    const isFormFilled = (formData) => {
        return (
            formData.title.trim() !== '' &&
            formData.team.trim() !== '' &&
            formData.photo.trim() !== '' &&
            formData.link.trim() !== '' &&
            formData.description.trim() !== ''
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFieldBlur = (field) => {
        setTouchedFields({ ...touchedFields, [field]: true });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        await validateFormAndSetErrors();
        if (isFormFilled(formData) && Object.keys(errors).length === 0) {
            console.log('Formulario válido. Guardando...', formData);
            navigateTo('/'); // Redirigir a la página principal después de guardar
        }
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrors({});
        setTouchedFields({
            title: false,
            team: false,
            photo: false,
            link: false,
            description: false,
        });
    };

    return (
        <div className="container__new-video">
            <header className="new-video__header">
                <h1 className="new-video__title">NUEVO VIDEO</h1>
                <p className="new-video__description">
                    COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
                </p>
            </header>
            <form className="new-video__form" onSubmit={handleSave}>
                <div className="form-section">
                    <div className="form-section__left">
                        <h2 className="new-video__form-title">Crear Tarjeta</h2>
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-section__left">
                        <label className={`new-video__form-label ${errors.title && touchedFields.title ? 'error-label' : ''}`}>
                            Título:
                            <input
                                className={`new-video__form-input ${errors.title && touchedFields.title ? 'error' : ''}`}
                                type="text"
                                placeholder='Ingresar título del video'
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                onBlur={() => handleFieldBlur('title')}
                                maxLength="200"
                                required
                            />
                            {errors.title && touchedFields.title && <span className="error-message">{errors.title}</span>}
                        </label>
                    </div>
                    <div className="form-section__right">
                        <OptionList
                            clase={`new-video__form-input new-video__form-option ${errors.team && touchedFields.team ? 'error-label' : ''}`}
                            value={formData.team}
                            onChange={(e) => {
                                handleChange({ target: { name: 'team', value: e.target.value } });
                                handleFieldBlur('team');
                            }}
                            options={categoryData}
                        />
                        {errors.team && touchedFields.team && <span className="error-message">{errors.team}</span>}
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-section__left">
                        <label className={`new-video__form-label ${errors.photo && touchedFields.photo ? 'error-label' : ''}`}>
                            Imagen:
                            <input
                                className={`new-video__form-input ${errors.photo && touchedFields.photo ? 'error' : ''}`}
                                type="url"
                                placeholder='Ingresar enlace de la imagen'
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                onBlur={() => handleFieldBlur('photo')}
                                maxLength="200"
                                required
                            />
                            {errors.photo && touchedFields.photo && <span className="error-message">{errors.photo}</span>}
                        </label>
                    </div>
                    <div className="form-section__right">
                        <label className={`new-video__form-label ${errors.link && touchedFields.link ? 'error-label' : ''}`}>
                            Video:
                            <input
                                className={`new-video__form-input ${errors.link && touchedFields.link ? 'error' : ''}`}
                                type="url"
                                placeholder='Ingresar enlace del video'
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                onBlur={() => handleFieldBlur('link')}
                                maxLength="200"
                                required
                            />
                            {errors.link && touchedFields.link && <span className="error-message">{errors.link}</span>}
                        </label>
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-section__left">
                        <label className={`new-video__form-label ${errors.description && touchedFields.description ? 'error-label' : ''}`}>
                            Descripción:
                            <textarea
                                className={`new-video__form-input new-video__form-textarea ${errors.description && touchedFields.description ? 'error' : ''}`}
                                name="description"
                                placeholder='¿De qué se trata este vídeo?'
                                value={formData.description}
                                onChange={handleChange}
                                onBlur={() => handleFieldBlur('description')}
                                ref={descriptionRef}
                                rows="4"
                                maxLength="300"
                                required
                            />
                            {errors.description && touchedFields.description && <span className="error-message">{errors.description}</span>}
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
        </div>
    );
}

export default NewVideo;
