import React from 'react';
function InputField({ inputValue, onClearInput, onChangeInput }) {

    const handleChange = (event) => {
        onChangeInput(event.target.value)
    }


    return (
        <input value={inputValue} type="text" onChange={handleChange} placeholder='Add task' />
    );
}

export default InputField;
