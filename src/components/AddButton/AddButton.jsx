import React from 'react';
import './AddButton.css'
import PropTypes from 'prop-types';

function AddButton({ toggleActivity, activeClass }) {

    const toggleActivityInputHandler = (event) => {
        event.preventDefault()
        toggleActivity({ 'addbtn': false, 'form': true })
    }


    return (
        <button
            className=
            {'add-button ' +
                (activeClass ? '' : 'inactive')
            }
            onClick={toggleActivityInputHandler}>
            Add Todo
        </button>
    );
}

AddButton.propTypes = {
    activeClass: PropTypes.bool.isRequired
}

export default AddButton;
