import React from 'react';

import './Priority.css';

import {
    ReactComponent as Arrow
} from './Assets/Arrow.svg';

function Priority({ selectedPriority, priorityOption, handleChangePriority }) {

    return (
        <div className='priority' value={selectedPriority} >
            <div className='selected'></div>
            {priorityOption.map(option => (
                <div
                    key={Date.now() + option.value}
                    className={'priority-option-container '`option-value${option.value}`}
                    onClick={handleChangePriority}
                    data-value={option.value}>
                    <Arrow className={`option-value${option.value}`} />
                </div>
            ))}
        </div>
    );
}

export default Priority;