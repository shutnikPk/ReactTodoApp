import React from 'react';
import PropTypes from 'prop-types';

function CancelDelete({ toggleActivity }) {

    const cancelHandler = () => {
        toggleActivity()
    }

    return (
        <button
            onClick={cancelHandler}
            className='base-button'
        >Cancel
        </button>
    );
}

CancelDelete.propTypes = {
    toggleActivity: PropTypes.func.isRequired
}

export default CancelDelete;
