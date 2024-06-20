import PropTypes from 'prop-types';
import './Modal.css';
import { useState, useEffect, useRef } from 'react';
import { IoMdCloseCircleOutline, IoMdArrowDropdown } from "react-icons/io";

const Modal = ({ card, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...card });
    const descriptionRef = useRef(null);

    useEffect(() => {
        setFormData({ ...card });
        if (descriptionRef.current) {
            adjustTextareaHeight(descriptionRef.current);
        }
    }, [card]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (e.target.name === 'description' && descriptionRef.current) {
            adjustTextareaHeight(descriptionRef.current);
        }
    };

    const handleSave = () => {
        onSave(formData);
    };

    const handleClear = () => {
        setFormData({ ...card });
        if (descriptionRef.current) {
            adjustTextareaHeight(descriptionRef.current);
        }
    };

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <IoMdCloseCircleOutline className="close-icon" onClick={onClose} />
                <h1>EDITAR CARD:</h1>
                <form className='modal-form'>
                    <label>Título:
                        <input
                            className='modal-form-input' 
                            type="text" name="title" 
                            value={formData.title} 
                            onChange={handleChange}
                            maxLength="200"
                        />
                    </label>
                    <label className='modal-form-category'>Categoría:
                        <input 
                            className='modal-form-input' 
                            type="text" name="team" 
                            value={formData.team} 
                            onChange={handleChange}
                            maxLength="50"
                            />
                        <IoMdArrowDropdown />
                    </label>
                    <label>Imagen:
                        <input 
                            className='modal-form-input' 
                            type="text" name="photo" 
                            value={formData.photo} 
                            onChange={handleChange}
                            maxLength="200"
                        />
                    </label>
                    <label>Video:
                        <input 
                            className='modal-form-input' 
                            type="text" name="link" 
                            value={formData.link} 
                            onChange={handleChange}
                            maxLength="200"
                        />
                    </label>
                    <label>Descripción:
                        <textarea
                            className='modal-form-input'
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            ref={descriptionRef}
                            rows="1"
                            maxLength="500"
                        />
                    </label>
                </form>
                <div className="modal-buttons">
                    <button 
                        className='modal-button-save' 
                        onClick={handleSave}>
                            GUARDAR
                    </button>
                    <button 
                        className='modal-button-delete' 
                        onClick={handleClear}>
                            LIMPIAR
                    </button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    card: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default Modal;
