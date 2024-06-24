import { useState } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';
import { BsCheckCircle } from "react-icons/bs";

const Notification = ({ message, onClose, color }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`notification ${show ? 'show' : ''}`} style={{ backgroundColor: color }}>
            <div className="notification-content">
                <div className="notification-icons">
                    <BsCheckCircle className='notification-icon' />
                </div>
                <p>{message}</p>
                <button className="close-button" onClick={handleClose}>X</button>
            </div>
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string
};

Notification.defaultProps = {
    color: 'var(--color-white)' 
};

export default Notification;