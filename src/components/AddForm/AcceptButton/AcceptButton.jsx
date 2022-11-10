import React from 'react';
import './AcceptButton.css'
import PropTypes from 'prop-types';

function AcceptButton({
    onAddTodoName,
    toggleActivity,
    onClearDeadlineInput
}) {

    const acceptHandler = (event) => {
        event.preventDefault()
        onAddTodoName()
        toggleActivity()
        onClearDeadlineInput()
    }

    return (
        <button className='base-button' onClick={acceptHandler}>
            Save
        </button>
    );
}

AcceptButton.propTypes = {
    onAddTodoName: PropTypes.func.isRequired,
    toggleActivity: PropTypes.func.isRequired
}

export default AcceptButton;
