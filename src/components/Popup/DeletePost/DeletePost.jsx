import React from 'react';
import './DeletePost.css'

function DeletePost({ onDelete, toggleActivity, postId }) {

    const deletepostHandler = () => {
        onDelete(postId)
        toggleActivity({ 'popup': false, 'addbtn': true, 'form': false })

    }

    return (
        <button onClick={deletepostHandler} className='danger-button'>Delete</button>
    );
}

export default DeletePost;
