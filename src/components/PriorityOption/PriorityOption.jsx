import React from 'react';

import {
    useState
} from 'react';

import PriorityIcon from '../PriorityIcon/PriorityIcon';


import './PriorityOption.css';

import {
    options
} from '../../constants/constants';

function PriorityOption({ defaultValue, onChange }) {

    const [selectedOption, setSelectedOption] = useState(defaultValue | 1);
    const [isOpenList, SetIsOpenList] = useState(false);

    const handleClick = (value) => {
        setSelectedOption(value);
        SetIsOpenList(!isOpenList);
    };

    return (
        <div className='priority' >
            <div className={`selected-option ${isOpenList ? 'hidden-list' : ''}`}>
                <div
                    key={selectedOption}
                    className={`priority-option-container priority-option-container${selectedOption}`}
                    onClick={() => handleClick(selectedOption)}
                    data-value={selectedOption}
                >
                    <PriorityIcon
                        value={selectedOption}
                        label={options[selectedOption - 1].label}
                        className={`option-value option-value${selectedOption}`}
                    />
                    <PriorityIcon
                        value={selectedOption}
                        label={options[selectedOption - 1].label}
                        className={`option-value option-value${selectedOption}`}
                    />
                    <PriorityIcon
                        value={selectedOption}
                        label={options[selectedOption - 1].label}
                        className={`option-value option-value${selectedOption}`}
                    />
                </div>
            </div>
            <div className={`priority-option-list ${isOpenList ? '' : 'hidden-list'}`}>
                {
                    options.map(({ value, label = '' }) => (
                        <div
                            key={value}
                            className={`priority-option-container priority-option-container${value}`}
                            onClick={() => handleClick(value)}
                            data-value={value}
                        >
                            <PriorityIcon
                                value={value}
                                label={label}
                                className={`option-value option-value${value}`}
                            />
                            <PriorityIcon
                                value={value}
                                label={label}
                                className={`option-value option-value${value}`}
                            />
                            <PriorityIcon
                                value={value}
                                label={label}
                                className={`option-value option-value${value}`}
                            />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default PriorityOption;