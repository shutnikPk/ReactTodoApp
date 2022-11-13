import React from 'react';

import PropTypes from 'prop-types';

import './ValidationMessage.css';


function ValidationMessage({ textMsg, visible }) {

    return (
        <div className={'danger-msg pop-outin ' + (visible ? '' : 'inactive')}>
            {textMsg}
        </div>
    );

}

ValidationMessage.propTypes = {
    visible: PropTypes.bool
};

ValidationMessage.defaultProps = {
    visible: false
};

export default ValidationMessage;
