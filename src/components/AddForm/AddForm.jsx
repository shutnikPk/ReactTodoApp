import React from 'react';

import './AddForm.css';
import {
    useState
} from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import ValidationMessage from '../ValidationMessage/ValidationMessage';

import InputField from './InputField/InputField';

function AddForm({
    addTodo,
    toggleVisability,
    visible
}) {

    const [inputValue, setInputValue] = useState('');
    const [deadline, setDeadline] = useState('');
    const [validMsg, setValidMsg] = useState(false);

    const todo = {
        isImportant: true,
        isFinished: false,
    };

    const setTodoDeadline = () => {
        if (!deadline) {
            showValidMsg();
            return;
        }

        todo.deadline = deadline.toISOString();
        return true;

    };

    const onChangeDeadline = (date) => {
        setDeadline(date);
    };

    const onClearDeadlineInput = () => {
        setDeadline('');
    };

    const changeTodoText = () => {
        if (!inputValue.trim()) {
            showValidMsg();
            return;
        }

        todo.text = inputValue;
        return true;
    };

    const addTodoHandler = () => {
        addTodo(todo);

    };

    const onClearInput = () => {
        setInputValue('');
    };

    const onChangeInput = (text) => {
        setInputValue(text);
    };

    const onSave = (e) => {
        e.preventDefault();
        if (
            !changeTodoText() ||
            !setTodoDeadline()
        ) { return; }
        toggleVisability();
        onClearInput();
        setTodoDeadline();
        changeTodoText();
        addTodoHandler();
        onClearDeadlineInput();
        hideValidMsg();
    };

    const onCancel = (e) => {
        e.preventDefault();
        toggleVisability();
        onClearDeadlineInput();
        onClearInput();
        hideValidMsg();
    };

    const showValidMsg = () => {
        setValidMsg(true);
    };

    const hideValidMsg = () => {
        setValidMsg(false);
    };

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
                        onClick={onSave}
                    />
                    <Button
                        name={'Cancel'}
                        className={'button button__danger'}
                        onClick={onCancel}
                    />
                </div>
                <ValidationMessage visible={validMsg} textMsg={'Empty todo name or date!'} />
            </div>

        </form >
    );
}

AddForm.propTypes = {
    visible: PropTypes.bool,
    addTodo: PropTypes.func.isRequired,
    toggleVisability: PropTypes.func.isRequired
};

AddForm.defaultProps = {
    visible: true
};

export default AddForm;
