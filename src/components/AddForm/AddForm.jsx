import React from 'react';
import './AddForm.css'
import AddButton from "../AddButton/AddButton"
import CancelButton from "../CancelButton/CancelButton"
import AcceptButton from "../AcceptButton/AcceptButton"
import InputField from "../InputField/InputField"
import { useState } from 'react';

function AddForm({ addTodo }) {

    const [inputValue, setInputValue] = useState('')
    const [activeInput, setActiveInput] = useState('inactive')
    const [activeAddButton, setActiveAddButton] = useState('')

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

    const toggleActivity = () => {
        activeInput ? setActiveInput('') : setActiveInput('inactive')
        activeAddButton ? setActiveAddButton('') : setActiveAddButton('inactive')
    }

    return (
        <form className='add-form'>
            <div className={'add-form--row-container ' + activeInput}>
                <InputField inputValue={inputValue} onClearInput={onClearInput} onChangeInput={onChangeInput} />
                <div className='add-form--btn-container'>
                    <CancelButton toggleActivity={toggleActivity} onClearInput={onClearInput} />
                    <AcceptButton toggleActivity={toggleActivity} getAcceptTrigerHandler={getAcceptTrigerHandler} />
                </div>
            </div>
            <div className={activeAddButton}>
                <AddButton toggleActivity={toggleActivity} />
            </div>
        </form>
    );
}

export default AddForm;
