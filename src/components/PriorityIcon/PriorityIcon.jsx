import React from 'react';

import {
    ReactComponent as Arrow
} from '../../Assets/Arrow.svg';

function PriorityIcon({ value, label = '' }) {
    return (
        <Arrow data-value={value} alt={label} className={`option-value option-value${value}`} />
    );
}

export default PriorityIcon;