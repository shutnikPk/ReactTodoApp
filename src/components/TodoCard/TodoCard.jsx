import React from 'react';

//style
import './TodoCard.css'

function TodoCard({ todo, ...props }) {
    return (
        <div className='todo-card'>
            <div>ID : {todo?.id}</div>
            <p className='todo-card--text'>{todo?.text}</p>
            <div>Is important : {todo?.isImportant.toString()}</div>
            <p className='todo-card--deeadline'>Deadline : {todo?.deadline}</p>
            <div>Is Fineshed : {todo?.isFinshed.toString()}</div>
        </div>
    );
}

export default TodoCard;