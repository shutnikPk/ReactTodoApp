import React from 'react';
import './Popup.css'
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Popup({
    onClickDeleteButton,
    visible,
    toggleVisability
}) {

    return (
        <div className=
            {
                'popup--background ' + (visible ? '' : 'hidden')
            }
        >
            <div className="popup--container">
                <p className="popup--text">This action can not be undone. Are you sure?</p>
                <div className="popud--row">
                    <Button
                        name={"Delete"}
                        className={"button button__danger"}
                        onClick={() => onClickDeleteButton()}
                    />
                    <Button
                        name={"Cancel"}
                        className={"button"}
                        onClick={() => toggleVisability({ 'popup': false })}
                    />
                </div>
            </div>
        </div>
    );
}

Popup.propTypes = {
    visible: PropTypes.bool.isRequired
}

export default Popup;
