import React from 'react';
import DatePicker from 'react-datepicker';
import './MyDatePicker.css'
import 'react-datepicker/dist/react-datepicker.css'

function MyDatePicker(
    {
        deadline,
        onChangeDeadline
    }
) {

    return (
        <DatePicker
            className='my-datepicker-container'
            dateFormat="dd/MM/yyyy"
            selected={deadline}
            onChange={(date) => {
                onChangeDeadline(date)
            }
            }
            placeholderText="DD/MM/YYYY"
            minDate={Date.now()}
        />
    )
}

export default MyDatePicker;
