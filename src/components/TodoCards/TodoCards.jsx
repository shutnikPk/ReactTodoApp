import React from 'react';
import TodoCard from '../TodoCard/TodoCard';
import './TodoCards.css'

function TodoCards({ todos, onDelete, toggleActivity, getId }) {

    return (
        <div className='todos-container'>
            {todos.map(e => <TodoCard getId={getId} toggleActivity={toggleActivity} onDelete={onDelete} key={e.id} todo={e} />)}
        </div>
    );
}

export default TodoCards;
