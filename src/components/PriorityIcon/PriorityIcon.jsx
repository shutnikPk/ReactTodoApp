import React from 'react';

import PropTypes from 'prop-types';

import {
    ReactComponent as Arrow
} from '../../Assets/Arrow.svg';

function PriorityIcon({ value, label = '' }) {
    return (
        <>
            <Arrow
                data-value={value}
                alt={label}
                className={`option-value option-value${value}`}
            />
            <Arrow
                data-value={value}
                alt={label}
                className={`option-value option-value${value}`}
            />
            <Arrow
                data-value={value}
                alt={label}
                className={`option-value option-value${value}`}
            />
        </>

    );
}

PriorityIcon.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string,
};

export default PriorityIcon;
