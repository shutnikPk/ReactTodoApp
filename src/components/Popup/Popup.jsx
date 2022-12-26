import React from 'react';
import './Popup.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

function Popup({ onConfirmDelete, setDeleteTaskId }) {

    return (
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
    );
}

Popup.propTypes = {
    children: PropTypes.array.isRequired
};

export default Popup;
