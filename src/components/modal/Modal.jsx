import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './Modal.css';
import categoryData from '../../data/CategoryData';
import OptionList from '../optionList/OptionList';
import { validateForm } from '../../utils/ValidateForm';
import FormButton from '../button/FormButton';
import ConfirmationDialog from '../confirmationDialog/ConfirmationDialog';

const Modal = ({ card, isOpen, onClose, onSave }) => {
    const initialFormData = useMemo(() => ({
        title: '',
        category: '',
        photo: '',
        link: '',
        description: '',
    }), []);

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const descriptionRef = useRef(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        if (isOpen && card) {
            setFormData({ ...card });
        } else {
            setFormData(initialFormData);
        }
        setErrors({});
    }, [card, isOpen, initialFormData]);

    useEffect(() => {
        const validate = async () => {
            const formErrors = await validateForm(formData);
            setErrors(formErrors);
            setIsButtonDisabled(Object.keys(formErrors).length > 0);
        };
        validate();
    }, [formData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value.toString() });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formErrors = await validateForm(formData);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            setShowConfirmation(true);
        }
    };

    const handleConfirmSave = () => {
        onSave(formData);
        setShowConfirmation(false);
    };

    const handleCancelSave = () => {
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrors({});
        setIsButtonDisabled(true);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <IoMdCloseCircleOutline className="close-icon" onClick={onClose} />
                <h1>EDITAR CARD:</h1>
                <form className='modal-form' onSubmit={handleSave}>
                    <label>Título:
                        <input
                            className={`modal-form-input ${errors.title ? 'error' : ''}`}
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            maxLength="200"
                            required
                        />
                        {errors.title && <span className="error-message">{errors.title}</span>}
                    </label>
                    <OptionList
                        clase={`modal-form-input modal-form-option ${errors.photo ? 'error' : ''}`}
                        clase2='dropdown-option'
                        value={formData.category}
                        onChange={(e) => handleChange({ target: { name: 'category', value: e.target.value } })}
                        options={categoryData}
                    />
                    {errors.category && <span className="error-message">{errors.category}</span>}
                    <label>Imagen:
                        <input
                            className={`modal-form-input ${errors.photo ? 'error' : ''}`}
                            type="url"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            maxLength="200"
                            required
                        />
                        {errors.photo && <span className="error-message">{errors.photo}</span>}
                    </label>
                    <label>Video:
                        <input
                            className={`modal-form-input ${errors.link ? 'error' : ''}`}
                            type="url"
                            name="link"
                            value={formData.link}
                            onChange={handleChange}
                            maxLength="200"
                            required
                        />
                        {errors.link && <span className="error-message">{errors.link}</span>}
                    </label>
                    <label>Descripción:
                        <textarea
                            className={`modal-form-input modal-form-textarea ${errors.description ? 'error' : ''}`}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            ref={descriptionRef}
                            rows="1"
                            maxLength="500"
                            required
                        />
                        {errors.description && <span className="error-message">{errors.description}</span>}
                    </label>
                    <div className="new-video__form-buttons">
                        <FormButton
                            type="submit"
                            label="GUARDAR"
                            disabled={isButtonDisabled}
                            buttonType="form-button--save"
                        />
                        <FormButton
                            type="button"
                            label="LIMPIAR"
                            onClick={handleCancel}
                            buttonType="form-button--cancel"
                        />
                    </div>
                </form>
            </div>
            {showConfirmation && (
                <ConfirmationDialog
                    message={`¿Estás seguro de que deseas guardar los cambios?`}
                    onConfirm={handleConfirmSave}
                    onCancel={handleCancelSave}
                />
            )}
        </div>
    );
};

Modal.propTypes = {
    card: PropTypes.object,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default Modal;