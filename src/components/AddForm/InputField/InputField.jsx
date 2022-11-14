import React from 'react';
import './InputField.css';
import PropTypes from 'prop-types';

import MyDatePicker from './MyDatePicker/MyDatePicker';

function InputField({
    inputValue,
    onChangeInput,
    deadline,
    onChangeDeadline,
    dangerClass
}) {

    const handleChange = (event) => {
        onChangeInput(event.target.value);
    };


    return (
        <div className={'input-container ' + (dangerClass ? 'danger' : '')}>
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
    onChangeInput: PropTypes.func.isRequired,
    deadline: PropTypes.string.isRequired,
    onChangeDeadline: PropTypes.func.isRequired,
    dangerClass: PropTypes.bool,
    inputValue: PropTypes.string.isRequired,
};

InputField.defaultProps = {
    dangerClass: false,
};

export default InputField;
