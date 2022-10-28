import React from 'react';
import './AddForm.css'
import AddButton from "../AddButton/AddButton"
import CancelButton from "../CancelButton/CancelButton"
import AcceptButton from "../AcceptButton/AcceptButton"
import InputField from "../InputField/InputField"
import { useState } from 'react';

function AddForm({ addTodo }) {

    const [inputValue, setInputValue] = useState('')

    let todo = {
        isImportant: true,
        text: 'tasksText',
        deadline: "1",
        id: Date.now(),
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

    const getAcceptTrigerHandler = () => {
        changeTodoText()
        onClearInput()
        addTodoHandler()
    }

    return (
        <form className='add-form'>
            <InputField inputValue={inputValue} onClearInput={onClearInput} onChangeInput={onChangeInput} />
            <div className='add-form--btn-container'>
                <CancelButton />
                <AcceptButton getAcceptTrigerHandler={getAcceptTrigerHandler} />
            </div>
            <AddButton />
        </form>
    );
}

export default AddForm;
