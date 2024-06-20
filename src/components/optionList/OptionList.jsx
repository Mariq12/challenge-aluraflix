import PropTypes from 'prop-types';
import './OptionList.css';

const OptionList = ({ value, onChange, options }) => {
    return (
        <div className="option-list">
            <label>Categoría:</label>
            <select
                className="modal-form-input" // Aquí se aplica la clase para el estilo
                value={value}
                onChange={onChange}
            >
                <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
                {options.map((option) => (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

OptionList.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            primaryColor: PropTypes.string.isRequired
        })
    ).isRequired
};

export default OptionList;
