import React from 'react';
import TodoCard from '../TodoCard/TodoCard';
import './TodoCards.css'

function TodoCards({ todos,onDelete }) {

    return (
        <div className='todos-container'>
            {todos.map(e => <TodoCard onDelete={onDelete} key={e.id} todo={e} />)}
        </div>
    );

}

export default TodoCards;
