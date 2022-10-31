import React from 'react';
import './InputField.css';

function InputField({ inputValue, onChangeInput }) {

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

export default InputField;
