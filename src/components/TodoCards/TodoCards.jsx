import React from 'react';

import TodoCard from '../TodoCard/TodoCard';

import './TodoCards.css'

function TodoCards({ todos }) {

    return (
        <div className='todos-container'>
            {todos.map(e => <TodoCard key={e.id} todo={e} />)}
        </div>
    );

}

export default TodoCards;
