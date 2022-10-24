import React from 'react';

//components
import TodoCard from '../TodoCard/TodoCard';

//styles
import './TodoCards.css'

function TodoCards({ todos }) {
    return (
        <div className='todos-container'>
            {todos.map(e => <TodoCard todo={e} />)}
        </div>
    );
}

export default TodoCards;