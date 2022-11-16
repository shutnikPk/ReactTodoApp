import React from 'react';
import './TodoCard.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

function TodoCard({
    todo,
    onClickCrossButton
}) {

    const setFormateDate = () => {
        return new Date(todo?.deadline).toLocaleString([], {
            day: 'numeric', month: 'numeric', year: 'numeric'
        }).replaceAll('.', '/');
    };

    const compareDeadline = () => new Date(todo?.deadline) <= new Date() ?
        ' todo-card--deadline__danger'
        :
        '';

    return (
        <div className='todo-card'>
            <p className='todo-card--number'>{todo?.id}</p>
            <p className='todo-card--text'>{todo?.text}</p>
            <p className={'todo-card--deadline' + compareDeadline()}>{setFormateDate()}</p >
            <Button
                name={''}
                className={'button__delete'}
                onClick={() => onClickCrossButton(todo?.id)}
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
    onClickCrossButton: PropTypes.func.isRequired,
};

TodoCard.defaultProps = {
    todo: ({
    }),
    onClickCrossButton: (() => new Error('onClickCrossButton() is Required')),
};

export default TodoCard;
