import React from 'react';

import PropTypes from 'prop-types';

import './MenuItem.css';

function MenuItem({ name = 'Button', onClick }) {

    return (
        <button
            className={`sub-menu-button sub-menu-button--${name}`}
            onClick={onClick}
        >
            <span className={'sub-menu-button--text'}>{name}</span>
            <span className={`sub-menu-button--icon sub-menu-button--icon-${name}`} />
        </button>
    );
}

MenuItem.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default MenuItem;
