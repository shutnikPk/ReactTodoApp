import React from 'react';
import DatePicker from 'react-datepicker';
import './MyDatePicker.css';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker(
    {
        deadline,
        onChangeDeadline,
        dangerClass
    }
) {


    return (
        <DatePicker
            className={'my-datepicker-container ' + (dangerClass ? 'my-datepicker-container__danger' : '')}
            dateFormat="dd/MM/yyyy"
            selected={deadline}
            onChange={(date) => {
                onChangeDeadline(date);
            }
            }
            placeholderText="DD/MM/YYYY"
        />
    );
}

export default MyDatePicker;
