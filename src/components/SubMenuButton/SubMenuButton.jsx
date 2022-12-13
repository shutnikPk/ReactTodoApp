import React from 'react';

import './SubMenuButton.css';

function SubMenuButton({ name = 'Button', children, onClick }) {

    return (
        <button
            className={`sub-menu-button sub-menu-button--${name}`}
            onClick={onClick}
        >
            <span className={'sub-menu-button--text'}>{name}</span>
            <span className={'sub-menu-button--icon'}>{children}</span>
        </button>
    );
}

export default SubMenuButton;
