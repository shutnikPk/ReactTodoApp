import React from 'react';
import DeleteButton from './DeleteButton/DeleteButton';
import './TodoCard.css'
import PropTypes from 'prop-types';

function TodoCard({
    todo,
    toggleActivity,
    setId
}) {

    const setFormateDate = () => {
        return new Date(todo?.deadline).toLocaleString([], { day: 'numeric', month: 'numeric', year: 'numeric' }).replaceAll('.', '/')
    }

    const compareDeadline = () => new Date(todo?.deadline) <= new Date() ?
        ' todo-card--deadline__danger'
        :
        ''



    console.log(typeof todo.deadline)

    return (
        <div className='todo-card'>
            <p className='todo-card--number'>{todo?.id}</p>
            <p className='todo-card--text'>{todo?.text}</p>
            <p className={'todo-card--deadline' + compareDeadline()}>{setFormateDate()}</p >
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
