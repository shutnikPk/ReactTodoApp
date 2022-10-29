import React from 'react';
import './AcceptButton.css'

function AcceptButton({ getAcceptTrigerHandler, toggleActivity }) {

    const acceptHandler = (event) => {
        event.preventDefault()
        getAcceptTrigerHandler()
        toggleActivity()
    }

    return (
        <button className='accept-button' onClick={acceptHandler}>
            Accept
        </button>
    );
}

export default AcceptButton;
