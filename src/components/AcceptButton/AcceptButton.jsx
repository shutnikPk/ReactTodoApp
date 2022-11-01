import React from 'react';
import './AcceptButton.css'

function AcceptButton({ onAddTodoName, toggleActivity }) {

    const acceptHandler = (event) => {
        event.preventDefault()
        onAddTodoName()
        toggleActivity({ 'addbtn': true, 'form': false })
    }

    return (
        <button className='base-button' onClick={acceptHandler}>
            Accept
        </button>
    );
}

export default AcceptButton;
