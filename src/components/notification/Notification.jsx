import { useState } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';
import { BsCheckCircle } from "react-icons/bs";

const Notification = ({ message, onClose }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`notification ${show ? 'show' : ''}`}>
            <div className="notification-content">
                <div className="notification-icons">
                    <BsCheckCircle className='notification-icon' />
                </div>
                <p>{message}</p>
                <button className="close-button" onClick={handleClose}></button>
            </div>
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Notification;