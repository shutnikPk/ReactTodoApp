import React from 'react';
import './TodoCard.css'

function TodoCard({ todo }) {

    return (
        <div key={todo?.id} className='todo-card'>
            <p className='todo-card--number'>{todo?.id}</p>
            <p className='todo-card--text'>{todo?.text}</p>
        </div>
    );

}

export default TodoCard;
