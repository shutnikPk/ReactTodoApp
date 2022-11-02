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

    let todo = {
        isImportant: true,
        text: 'tasksText',
        deadline: '1',
        isFinished: false,
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
                />
                <div className='add-form--btn-container'>
                    <AcceptButton
                        toggleActivity={() => toggleActivity({
                            'addbtn': true,
                            'form': false
                        })}
                        onAddTodoName={onAddTodoName}
                    />
                    <CancelButton
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
    activeClass: PropTypes.bool.isRequired
}

export default AddForm;
