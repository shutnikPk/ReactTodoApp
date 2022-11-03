import React from 'react';
import DeleteButton from './DeleteButton/DeleteButton';
import './TodoCard.css'
import PropTypes from 'prop-types';

function TodoCard({
    todo,
    toggleActivity,
    setId
}) {

    return (
        <div  className='todo-card'>
            <p className='todo-card--number'>{todo?.id}</p>
            <p className='todo-card--text'>{todo?.text}</p>
            <DeleteButton
                setId={() => setId(todo?.id)}
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
    }).isRequired,
    toggleActivity: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired
}

export default TodoCard;
