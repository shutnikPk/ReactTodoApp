import React from 'react';
import './AddForm.css'
import CancelButton from '../CancelButton/CancelButton'
import AcceptButton from '../AcceptButton/AcceptButton'
import InputField from '../InputField/InputField'
import { useState } from 'react';

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
                    onClearInput={onClearInput}
                    onChangeInput={onChangeInput}
                />
                <div className='add-form--btn-container'>
                    <CancelButton
                        toggleActivity={toggleActivity}
                        onClearInput={onClearInput}
                    />
                    <AcceptButton
                        toggleActivity={toggleActivity}
                        onAddTodoName={onAddTodoName}
                    />
                </div>
            </div>

        </form >
    );
}

export default AddForm;
