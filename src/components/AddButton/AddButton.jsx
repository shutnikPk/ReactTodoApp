import React from 'react';
import './AddButton.css'

function AddButton({ toggleActivity }) {

    const toggleActivityInputHandler = (event) => {
        event.preventDefault()
        toggleActivity()
    }

    return (
        <button className='add-button' onClick={toggleActivityInputHandler}>
            Add Todo
        </button>
    );
}

export default AddButton;
