import React from 'react';
import './CancelButton.css'

function CancelButton({ toggleActivity, onClearInput }) {

    const cancelHandler = (event) => {
        event.preventDefault()
        toggleActivity()
        onClearInput()
    }

    return (
        <button className='cancel-button' onClick={cancelHandler}>
            Cancel
        </button>
    );

}

export default CancelButton;
