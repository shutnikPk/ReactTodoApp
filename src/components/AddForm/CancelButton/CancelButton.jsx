import React from 'react';
import './CancelButton.css'
import PropTypes from 'prop-types';

function CancelButton({
    toggleActivity,
    onClearInput,
    onClearDeadlineInput
}) {

    const cancelHandler = (event) => {
        event.preventDefault()
        toggleActivity()
        onClearInput()
        onClearDeadlineInput()

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
