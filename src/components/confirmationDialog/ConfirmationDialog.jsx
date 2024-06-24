import PropTypes from 'prop-types';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ message, primaryColor, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-dialog">
            <p className="confirmation-dialog-message">
                {message} <span className="confirmation-dialog-title" style={{ color: primaryColor }}></span>
            </p>
            <button className='confirmation-yes' onClick={onConfirm}>Sí</button>
            <button className='confirmation-no' onClick={onCancel}>No</button>
        </div>
    );
};

ConfirmationDialog.propTypes = {
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
