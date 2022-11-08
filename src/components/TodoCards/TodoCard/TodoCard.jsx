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
        const day = todo?.deadline.getDate()
        const month = todo?.deadline.getMonth()
        const year = todo?.deadline.getFullYear()

        return (
            [
                day,
                month,
                year
            ].join('/')
        )
    }

    const compareDeadline = () => todo?.deadline <= new Date(Date.now()) ?
        ' todo-card--deadline__danger'
        :
        ''


    compareDeadline()

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
        deadline: PropTypes.object,
        id: PropTypes.number,
        isFinished: PropTypes.bool
    }).isRequired,
    toggleActivity: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired
}

export default TodoCard;
