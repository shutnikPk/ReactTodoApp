import React from 'react';

import PropTypes from 'prop-types';

import './ValidationMessage.css';


function ValidationMessage({ textMsg, visible }) {

    return (
        <>
            <div className={'danger-msg pop-outin ' + (visible ? '' : 'inactive')}>
                {textMsg}
            </div>
        </>

    );

}

ValidationMessage.propTypes = {
    textMsg: PropTypes.string,
    visible: PropTypes.bool
};

ValidationMessage.defaultProps = {
    textMsg: 'Somthing wrong',
    visible: false
};

export default ValidationMessage;
