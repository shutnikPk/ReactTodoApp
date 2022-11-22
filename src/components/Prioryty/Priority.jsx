import React from 'react';

function Priority({ selected, handleChangePriority, priorityOption }) {

    return (
        <div>
            <select value={selected} onChange={handleChangePriority}>
                {priorityOption.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Priority;