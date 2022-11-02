import React from 'react';
import './DeleteButton.css'
import PropTypes from 'prop-types';

function DeleteButton({
    toggleActivity,
    getId
}) {

    const onDeleteHandler = () => {
        toggleActivity()
        getId()
    }

    return (
        <button
            className='delete-button'
            onClick={onDeleteHandler}
        ></button>
    );
}

DeleteButton.propTypes = {
    toggleActivity: PropTypes.func.isRequired,
    getId: PropTypes.func.isRequired
}

export default DeleteButton;
