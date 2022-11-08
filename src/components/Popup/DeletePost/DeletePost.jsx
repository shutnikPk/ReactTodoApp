import React from 'react';
import PropTypes from 'prop-types';

function DeletePost({
    onDelete,
    toggleActivity
}) {

    const deletepostHandler = () => {
        onDelete()
        toggleActivity()
    }

    return (
        <button
            onClick={deletepostHandler}
            className='danger-button'>
            Delete
        </button>
    );
}

DeletePost.propTypes = {
    onDelete: PropTypes.func.isRequired,
    toggleActivity: PropTypes.func.isRequired
}

export default DeletePost;
