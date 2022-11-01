import React from 'react';

function CancelDelete({ toggleActivity }) {

    const cancelHandler = () => {
        toggleActivity({ 'popup': false, 'addbtn': true, 'form': false })
    }

    return (
        <button onClick={cancelHandler} className='base-button'>Cancel</button>
    );
}

export default CancelDelete;
