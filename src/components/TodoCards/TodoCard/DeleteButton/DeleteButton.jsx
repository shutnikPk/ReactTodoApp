import React from 'react';
import './DeleteButton.css'
import PropTypes from 'prop-types';

function DeleteButton({
    toggleActivity,
    setId
}) {

    const onDeleteHandler = () => {
        toggleActivity()
        setId()
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
    setId: PropTypes.func.isRequired
}

export default DeleteButton;
