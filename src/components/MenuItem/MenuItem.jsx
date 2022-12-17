import React from 'react';

import './MenuItem.css';

function MenuItem({ name = 'Button', onClick }) {

    return (
        <button
            className={`sub-menu-button sub-menu-button--${name}`}
            onClick={onClick}
        >
            <span className={'sub-menu-button--text'}>{name}</span>
            <span className={`sub-menu-button--icon sub-menu-button--icon-${name}`}></span>
        </button>
    );
}

export default MenuItem;
