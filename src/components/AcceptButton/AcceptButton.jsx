import React from 'react';
function AcceptButton({ getAcceptTrigerHandler }) {

    const acceptHandler = (event) => {
        event.preventDefault()
        getAcceptTrigerHandler()
    }

    return (
        <button onClick={acceptHandler}>
            Accept
        </button>
    );
}

export default AcceptButton;
