import React from 'react';

function Priority({ selectedPriority, priorityOption, handleChangePriority }) {

    return (
        <div>
            <select onChange={handleChangePriority} value={selectedPriority} >
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