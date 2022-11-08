import React from 'react';
import './CancelButton.css'
import PropTypes from 'prop-types';

function CancelButton({
    toggleActivity,
    onClearInput
}) {

    const cancelHandler = (event) => {
        event.preventDefault()
        toggleActivity()
        onClearInput()
    }

    return (
        <button className='danger-button' onClick={cancelHandler}>
            Cancel
        </button>
    );

}

CancelButton.propTypes = {
    onClearInput: PropTypes.func.isRequired,
    toggleActivity: PropTypes.func.isRequired
}

export default CancelButton;
