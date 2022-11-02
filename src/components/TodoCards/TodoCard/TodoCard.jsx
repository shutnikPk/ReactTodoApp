import React from 'react';
import DeleteButton from './DeleteButton/DeleteButton';
import './TodoCard.css'
import PropTypes from 'prop-types';

function TodoCard({
    todo,
    toggleActivity,
    getId
}) {

    return (
        <div key={todo?.id} className='todo-card'>
            <p className='todo-card--number'>{todo?.id}</p>
            <p className='todo-card--text'>{todo?.text}</p>
            <DeleteButton
                getId={() => getId(todo?.id)}
                toggleActivity={() => toggleActivity({ 'popup': true })}
            />
        </div>
    );

}

TodoCard.propTypes = {
    todo: PropTypes.shape({
        isImportant: PropTypes.bool,
        text: PropTypes.string,
        deadline: PropTypes.string,
        id: PropTypes.number,
        isFinished: PropTypes.bool
    }).isRequired
}

export default TodoCard;
