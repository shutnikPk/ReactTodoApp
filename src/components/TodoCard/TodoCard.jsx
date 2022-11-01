import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import './TodoCard.css'

function TodoCard({ todo, onDelete, toggleActivity,getId }) {

    return (
        <div key={todo?.id} className='todo-card'>
            <p className='todo-card--number'>{todo?.id}</p>
            <p className='todo-card--text'>{todo?.text}</p>
            <DeleteButton getId={getId} toggleActivity={toggleActivity} postId={todo.id} onDelete={onDelete} />
        </div>
    );

}

export default TodoCard;
