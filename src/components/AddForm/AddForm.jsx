import React from 'react';
import './AddForm.css'
import InputField from './InputField/InputField'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function AddForm({
    addTodo,
    toggleVisability,
    visible
}) {

    const [inputValue, setInputValue] = useState('')
    const [deadline, setDeadline] = useState('');

    const todo = {
        isImportant: true,
        text: 'tasksText',
        isFinished: false,
    }

    const setTodoDeadline = () => {
        deadline ?
            todo.deadline = deadline.toISOString() :
            todo.deadline = new Date().toISOString()
    }

    const onChangeDeadline = (date) => {
        setDeadline(date);
    }

    const onClearDeadlineInput = () => {
        setDeadline('')
    }

    const changeTodoText = () => {
        todo.text = inputValue
    }

    const addTodoHandler = () => {
        addTodo(todo)

    }


    const onClearInput = () => {
        setInputValue('')
    }

    const onChangeInput = (text) => {
        setInputValue(text);
    }

    const onClickSaveButton = () => {
        toggleVisability({
            'addbtn': true,
            'form': false
        })
        onClearInput()
        setTodoDeadline()
        changeTodoText()
        addTodoHandler()
    }

    const onClickCancelButton = () => {
        toggleVisability({
            'addbtn': true,
            'form': false
        })
        onClearDeadlineInput()
        onClearInput()
    }

    return (
        <form className={
            'add-form '
            + (visible ? '' : 'inactive')}
        >
            <div className='add-form--row-container'>
                <InputField
                    inputValue={inputValue}
                    onChangeInput={onChangeInput}
                    deadline={deadline}
                    onChangeDeadline={onChangeDeadline}
                />
                <div className='add-form--btn-container'>
                    <Button
                        name={'Save'}
                        className={'button'}
                        onClick={onClickSaveButton}
                    />
                    <Button
                        name={'Cancel'}
                        className={'button button__danger'}
                        onClick={onClickCancelButton}
                    />
                </div>
            </div>

        </form >
    );
}

AddForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleVisability: PropTypes.func.isRequired
}

AddForm.defaultProps = {
    addTodo: (() => console.error('addTodo() is Required')),
    toggleVisability: (() => console.error('toggleVisability() is Required')),
    visible: true
};

export default AddForm;
