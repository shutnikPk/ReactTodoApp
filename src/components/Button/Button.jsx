import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

function Button({ className, onClick, name, visible }) {

    const onClickHandler = () => onClick()

    return (
        <button className={className + `${visible ? '' : ' hidden'}`} onClick={onClickHandler}>{name}</button>
    );

}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    visible: PropTypes.bool
}

Button.defaultProps = {
    className: 'button button__base',
    onClick: (() => null),
    name: 'Button',
    visible: true
};

export default Button;
