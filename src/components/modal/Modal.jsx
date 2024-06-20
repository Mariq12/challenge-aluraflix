import PropTypes from 'prop-types';
import './Modal.css';
import { useState, useEffect } from 'react';
import { IoMdCloseCircleOutline, IoMdArrowDropdown } from "react-icons/io";

const Modal = ({ card, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...card });

    useEffect(() => {
        setFormData({ ...card });
    }, [card]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
    };

    const handleClear = () => {
        setFormData({ ...card });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <IoMdCloseCircleOutline className="close-icon" onClick={onClose} />
                <h1>EDITAR CARD:</h1>
                <form className='modal-form'>
                    <label>Título:
                        <input className='modal-form-input' type="text" name="title" value={formData.title} onChange={handleChange} />
                    </label>
                    <label className='modal-form-category'>Categoría:
                        <input className='modal-form-input' type="text" name="team" value={formData.team} onChange={handleChange} />
                        <IoMdArrowDropdown />
                    </label>
                    <label>Imagen:
                        <input className='modal-form-input' type="text" name="photo" value={formData.photo} onChange={handleChange} />
                    </label>
                    <label>Video:
                        <input className='modal-form-input' type="text" name="link" value={formData.link} onChange={handleChange} />
                    </label>
                    <label>Descripción:
                        <textarea className='modal-form-input' name="description" value={formData.description} onChange={handleChange} />
                    </label>
                </form>
                <div className="modal-buttons">
                    <button className='modal-button-save' onClick={handleSave}>Guardar</button>
                    <button className='modal-button-delete' onClick={handleClear}>Limpiar</button>
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
