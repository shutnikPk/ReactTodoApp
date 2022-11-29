import React from 'react';

import './Priority.css';

function Priority({ selectedPriority, priorityOption, handleChangePriority }) {

    return (
        <div>
            <select className='priority' onChange={handleChangePriority} value={selectedPriority} >
                {priorityOption.map(option => (
                    <option
                        className={`priority--option priority--option${option.value}`}
                        key={option.value} value={option.value}>
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Priority;