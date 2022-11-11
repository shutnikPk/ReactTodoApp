import React from 'react';
import './InputField.css';
import PropTypes from 'prop-types';

import MyDatePicker from './MyDatePicker/MyDatePicker';

function InputField({
    inputValue,
    onChangeInput,
    deadline,
    onChangeDeadline
}) {

    const handleChange = (event) => {
        onChangeInput(event.target.value);
    };


    return (
        <div className='input-container'>
            <input
                className='input-field'
                value={inputValue}
                type='text'
                onChange={handleChange}
                placeholder='Add task'
            />
            <MyDatePicker deadline={deadline} onChangeDeadline={onChangeDeadline} />
        </div>
    );
}

InputField.propTypes = {
    inputValue: PropTypes.string,
    onChangeInput: PropTypes.func
};

export default InputField;
