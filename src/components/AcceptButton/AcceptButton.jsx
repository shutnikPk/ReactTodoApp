import React from 'react';
import './AcceptButton.css'

function AcceptButton({ onAddTodoName, toggleActivity }) {

    const acceptHandler = (event) => {
        event.preventDefault()
        onAddTodoName()
        toggleActivity()
    }

    return (
        <button className='accept-button' onClick={acceptHandler}>
            Accept
        </button>
    );
}

export default AcceptButton;
