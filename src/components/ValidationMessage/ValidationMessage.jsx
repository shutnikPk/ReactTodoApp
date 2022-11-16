import React from 'react';

import PropTypes from 'prop-types';

import './ValidationMessage.css';


function ValidationMessage({ textMsg }) {

    return (
        <>
            <div className='danger-msg pop-outin'>
                {textMsg}
            </div>
        </>

    );

}

ValidationMessage.propTypes = {
    textMsg: PropTypes.string,
};

ValidationMessage.defaultProps = {
    textMsg: 'Somthing wrong',
};

export default ValidationMessage;
