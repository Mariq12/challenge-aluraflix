import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from "react-icons/io";
import './OptionList.css';

const OptionList = ({ value, onChange, options, clase, clase2 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        onChange({ target: { name: 'category', value: option } });
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="option-list" ref={dropdownRef}>
            <label>Categoría:</label>
            <div className="input-with-icon" onClick={handleToggleDropdown}>
                <div className={`${clase}`}>
                    {value || "Seleccionar categoría"}
                </div>
                <IoMdArrowDropdown className="dropdown-icon dropdown-icon-video" />
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            className={`${clase2}`}
                            onClick={() => handleSelectOption(option.name)}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

OptionList.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    clase: PropTypes.string.isRequired,
    clase2: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            primaryColor: PropTypes.string.isRequired
        })
    ).isRequired
};

export default OptionList;
