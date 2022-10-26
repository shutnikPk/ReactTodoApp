import React from 'react';
import IsFinished from '../IsFinished/IsFinished';
import IsImportant from '../IsImportant/IsImportant';

import './TodoCard.css'

function TodoCard({ todo, ...props }) {

    return (
        <div key={todo?.id} className='todo-card'>
            <IsFinished id={todo?.id} checked={todo?.isFinished} />
            <IsImportant id={todo?.id} isImportant={todo?.isImportant} />
            <div>ID : {todo?.id}</div>
            <p className='todo-card--text'>{todo?.text}</p>
            <p className='todo-card--deeadline'>Deadline : {todo?.deadline}</p>

        </div>
    );

}

export default TodoCard;
