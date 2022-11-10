import React from 'react';
import './AddForm.css'
import CancelButton from './CancelButton/CancelButton'
import AcceptButton from './AcceptButton/AcceptButton'
import InputField from './InputField/InputField'
import { useState } from 'react';
import PropTypes from 'prop-types';

function AddForm({
    addTodo,
    toggleActivity,
    activeClass
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

    const onAddTodoName = () => {

        setTodoDeadline()
        changeTodoText()
        onClearInput()
        addTodoHandler()
    }

    return (
        <form className={
            'add-form '
            + (activeClass ? '' : 'inactive')}
        >
            <div className='add-form--row-container'>
                <InputField
                    inputValue={inputValue}
                    onChangeInput={onChangeInput}
                    deadline={deadline}
                    onChangeDeadline={onChangeDeadline}
                />
                <div className='add-form--btn-container'>
                    <AcceptButton
                        onClearDeadlineInput={onClearDeadlineInput}
                        toggleActivity={() => toggleActivity({
                            'addbtn': true,
                            'form': false
                        })}
                        onAddTodoName={onAddTodoName}
                    />
                    <CancelButton
                        onClearDeadlineInput={onClearDeadlineInput}
                        toggleActivity={() => toggleActivity({
                            'addbtn': true,
                            'form': false
                        })}
                        onClearInput={onClearInput}
                    />
                </div>
            </div>

        </form >
    );
}

AddForm.propTypes = {
    activeClass: PropTypes.bool.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleActivity: PropTypes.func.isRequired
}

export default AddForm;
