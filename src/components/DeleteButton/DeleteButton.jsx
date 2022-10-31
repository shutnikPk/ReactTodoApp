import React from 'react';
import './DeleteButton.css'

function DeleteButton({ id, onDelete }) {

    const onDeleteHandler = () => onDelete(id)

    return (
        <button className='delete-button' onClick={onDeleteHandler}>

        </button>
    );
}

export default DeleteButton;
