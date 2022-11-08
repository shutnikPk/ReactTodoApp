import React from 'react';
import './InputField.css';
import PropTypes from 'prop-types';

function InputField({
    inputValue,
    onChangeInput
}) {

    const handleChange = (event) => {
        onChangeInput(event.target.value)
    }


    return (
        <input
            className='input-field'
            value={inputValue}
            type='text'
            onChange={handleChange}
            placeholder='Add task'
        />
    );
}

InputField.propTypes = {
    inputValue: PropTypes.string,
    onChangeInput: PropTypes.func
}

export default InputField;
