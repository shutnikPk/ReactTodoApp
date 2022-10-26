import React from 'react';
import { useState } from 'react';

function IsFinished({ checked, id }) {

    const [isChecked, setIsChecked] = useState(checked)

    return (
        <label htmlFor={id}>{"Is finished : "}
            <input className={'my-checkbox'} type={'checkbox'} defaultChecked={isChecked} id={id} />
        </label>
    );

}

export default IsFinished;
