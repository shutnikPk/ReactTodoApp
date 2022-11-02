import React from 'react';
import CancelDelete from './CancelDelete/CancelDelete';
import DeletePost from './DeletePost/DeletePost';
import './Popup.css'
import PropTypes from 'prop-types';

function Popup({
    onDelete,
    activeClass,
    toggleActivity
}) {

    return (
        <div className=
            {
                'popup--background ' + (activeClass ? '' : 'inactive')
            }
        >
            <div className="popup--container">
                <p className="popup--text">This action can not be undone. Are you sure?</p>
                <div className="popud--row">
                    <DeletePost onDelete={onDelete}
                        toggleActivity=
                        {() => toggleActivity(
                            {
                                'popup': false,
                                'addbtn': true,
                                'form': false
                            }
                        )} />
                    <CancelDelete toggleActivity=
                        {() => toggleActivity(
                            {
                                'popup': false,
                                'addbtn': true,
                                'form': false
                            }
                        )} />
                </div>
            </div>
        </div>
    );
}

Popup.propTypes = {
    activeClass: PropTypes.bool.isRequired
}

export default Popup;
