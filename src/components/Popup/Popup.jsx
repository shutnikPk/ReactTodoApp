import React from 'react';
import './Popup.css';
import PropTypes from 'prop-types';


function Popup({ children }) {

    return (
        <div className={'popup--background '}
        >
            <div className="popup--container">
                <p className="popup--text">This action can not be undone. Are you sure?</p>
                <div className="popud--row">
                    {children}
                </div>
            </div>
        </div>
    );
}

Popup.propTypes = {
    children: PropTypes.array.isRequired
};

export default Popup;
