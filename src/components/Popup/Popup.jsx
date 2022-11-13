import React from 'react';
import './Popup.css';
import PropTypes from 'prop-types';


function Popup({
    visible,
    children
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
                    {children}
                </div>
            </div>
        </div>
    );
}

Popup.propTypes = {
    visible: PropTypes.bool
};

Popup.defaultProps = {
    visible: true
};

export default Popup;
