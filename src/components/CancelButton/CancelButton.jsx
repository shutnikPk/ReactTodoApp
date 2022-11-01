import React from 'react';
import './CancelButton.css'

function CancelButton({ toggleActivity, onClearInput }) {

    const cancelHandler = (event) => {
        event.preventDefault()
        toggleActivity({ 'addbtn': true, 'form': false })
        onClearInput()
    }

    return (
        <button className='danger-button' onClick={cancelHandler}>
            Cancel
        </button>
    );

}

export default CancelButton;
