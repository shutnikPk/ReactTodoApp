import React from 'react';
import CancelDelete from './CancelDelete/CancelDelete';
import DeletePost from './DeletePost/DeletePost';
import './Popup.css'

function Popup({ onDelete, activeClass, toggleActivity, postId }) {

    return (
        <div className=
            {
                'popup--background ' + (activeClass ? '' : 'inactive')
            }
        >
            <div className="popup--container">
                <p className="popup--text">This action can not be undone. Are you sure?</p>
                <div className="popud--row">
                    <DeletePost onDelete={onDelete} postId={postId} toggleActivity={toggleActivity} />
                    <CancelDelete toggleActivity={toggleActivity} />
                </div>
            </div>
        </div>
    );
}

export default Popup;
