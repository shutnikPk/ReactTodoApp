import React from 'react';
import './Popup.css';
import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

import Button from '../Button/Button';



function Popup({ onConfirmDelete, setDeleteTaskId }) {

    const popup = document.getElementById('popup');

    return (
        createPortal(
            <div className='popup--background'>
                <div className="popup--container">
                    <p className="popup--text">This action can not be undone. Are you sure?</p>
                    <div className="popud--row">
                        <Button
                            name={'Delete'}
                            className={'button button__danger  button__danger__delete'}
                            onClick={() => onConfirmDelete()}
                        />
                        <Button
                            name={'Cancel'}
                            className={'button'}
                            onClick={() => setDeleteTaskId(null)}
                        />
                    </div>
                </div>
            </div>
            , popup));
}

Popup.propTypes = {
    onConfirmDelete: PropTypes.func.isRequired,
    setDeleteTaskId: PropTypes.func.isRequired,
};

export default Popup;
