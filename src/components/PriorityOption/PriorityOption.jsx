import React from 'react';

import {
    useState
} from 'react';

import PropTypes from 'prop-types';

import PriorityIcon from '../PriorityIcon/PriorityIcon';

import './PriorityOption.css';

import {
    options
} from '../../constants/constants';

function PriorityOption({ setTodoPriority }) {

    const [selectedOption, setSelectedOption] = useState(0);
    const [isOpenList, SetIsOpenList] = useState(false);

    const handleClick = (value) => {
        setTodoPriority(value);
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
                        label={options[selectedOption].label}
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

                        </div>
                    ))
                }
            </div>
        </div >
    );
}

PriorityOption.propTypes = {
    setTodoPriority: PropTypes.func.isRequired,
};

export default PriorityOption;
