import React from 'react';

function CustomOption({ value,onClick }) {

    return (
        <div
            key={Date.now() + value}
            className={`priority-option-container priority-option-container${value}`}
            onClick={handleClick}
            data-value={value}
        >
            <Arrow data-value={value} className={`option-value option-value${value}`} />
            <Arrow data-value={value} className={`option-value option-value${value}`} />
            <Arrow data-value={value} className={`option-value option-value${value}`} />
        </div>
    );

}

export default CustomOption;