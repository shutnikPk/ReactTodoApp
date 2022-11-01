import React from 'react';
import './DeleteButton.css'

function DeleteButton({ postId, toggleActivity,getId }) {

    const onDeleteHandler = () => {        
        toggleActivity({ 'popup': true })
        getId(postId)
    }

    return (
        <button className='delete-button' onClick={onDeleteHandler}>

        </button>
    );
}

export default DeleteButton;
