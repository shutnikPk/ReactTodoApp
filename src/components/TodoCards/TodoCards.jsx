import React from 'react';
import TodoCard from './TodoCard/TodoCard';
import './TodoCards.css'
import PropTypes from 'prop-types';

function TodoCards({
    todos,
    toggleActivity,
    setId
}) {

    return (
        <div className='todos-container'>
            {todos.map(e =>
                <TodoCard
                    setId={setId}
                    toggleActivity={toggleActivity}
                    key={e.id}
                    todo={e}
                />
            )}
        </div>
    );
}

TodoCards.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleActivity: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired
}

export default TodoCards;
