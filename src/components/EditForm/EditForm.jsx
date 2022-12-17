import React, {
    useEffect, useRef, useState
} from 'react';

import DatePicker from 'react-datepicker';

import {
    ERROR_MESSAGES
} from '../../constants/constants';
import Button from '../Button/Button';
import PriorityOption from '../PriorityOption/PriorityOption';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

import {
    ReactComponent as CalendarIcon
} from '../../Assets/monthly-calendar-svgrepo-com.svg';




function EditForm(
    { isEdit, setIsEdit, todo }) {

    const { id, deadline, priority, isImportant = true, isFinished = false, text } = todo;


    const [inputValue, setInputValue] = useState('');
    const [todoDeadline, setTodoDeadline] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isDangerClass, setIsDangerClass] = useState(false);
    const [dangerClassDate, setDangerClassDate] = useState(false);
    const [isCheck, setIsCheck] = useState(true);
    const [todoPriority, setTodoPriority] = useState(0);



    const inputRef = useRef(null);

    useEffect(() => {
        setTodoPriority(priority);
        setTodoDeadline(new Date(deadline));
        inputRef.current.focus();
    }, []);



    const isValidationDate = () => {
        const DAY_IN_MS = 86400000;
        if (!todoDeadline) {
            setErrorMessage(ERROR_MESSAGES.emptyDate);

            setDangerClassDate(true);

            return false;

        }

        if (todoDeadline <= new Date(Date.now() - DAY_IN_MS)) {

            setErrorMessage(ERROR_MESSAGES.wrongDate);

            setDangerClassDate(true);

            return false;

        }

        return true;

    };

    const isValidationName = () => {

        if (!inputValue.trim()) {
            setErrorMessage(ERROR_MESSAGES.emptyTask);
            inputRef.current.focus();
            return false;
        };

        return true;

    };

    const addTodoPriority = () => {
        todo.priority = todoPriority;
    };

    const setTodotodoDeadline = () => {
        todo.todoDeadline = todoDeadline.toISOString();
    };


    const onChangetodoDeadline = (date) => {
        setTodoDeadline(date);
    };

    const onCleartodoDeadlineInput = () => {
        setTodoDeadline(null);
    };

    const setTodoText = () => {
        todo.text = inputValue;
    };

    const addTodoHandler = () => {
        // addTodo(todo);

    };

    const onClearInput = () => {
        setInputValue('');
    };

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const defaultButtonClickAction = () => {
        // toggleFormVisability();
        onClearInput();
        onCleartodoDeadlineInput();
        hideerrorMessage();
    };

    const onSave = (e) => {
        e.preventDefault();
        const isValidDate = isValidationDate();
        const isValidName = isValidationName();
        if (!isValidDate || !isValidName) {
            setIsDangerClass(true);
            setIsCheck(false);
            return;
        }
        addTodoPriority();
        setTodotodoDeadline();
        setTodoText();
        addTodoHandler();

        defaultButtonClickAction();
    };

    const onCancel = (e) => {
        e.preventDefault();

        setIsEdit(false);

        setIsDangerClass(false);

        defaultButtonClickAction();
    };

    const hideerrorMessage = () => {
        setIsCheck(true);
    };



    return (
        <form className='add-form' >
            <div className='add-form--row-container'>
                <div className={'input-container ' +
                    (isDangerClass ? 'danger' : '')
                }>
                    <input
                        ref={inputRef}
                        className={'input-field'}
                        value={inputValue}
                        type='text'
                        onChange={onChangeInput}
                        placeholder={`${text}`}
                    />
                    <div className='datepicker-row'>
                        <DatePicker
                            className={'my-datepicker-container '
                                + (dangerClassDate ? 'my-datepicker-container__danger' : '')
                            }
                            dateFormat="dd/MM/yyyy"
                            selected={todoDeadline}
                            onChange={(date) => {
                                onChangetodoDeadline(date);
                            }
                            }
                            placeholderText="DD/MM/YYYY"
                        />
                        <CalendarIcon className={'calendar-icon ' +
                            (dangerClassDate
                                ? 'my-datepicker-container__danger'
                                : ''
                            )} />
                    </div>
                    <PriorityOption
                        setTodoPriority={setTodoPriority}
                        initialPriority={todoPriority}
                    />
                </div>
                <div className='add-form--btn-container'>
                    <Button
                        name={'Save'}
                        className={'button button__save'}
                        onClick={onSave}
                    />
                    <Button
                        name={'Cancel'}
                        className={'button button__danger'}
                        onClick={onCancel}
                    />
                </div>
                {!isCheck && (<ValidationMessage textMsg={errorMessage} />)}
            </div>

        </form >
    );
}

export default EditForm;