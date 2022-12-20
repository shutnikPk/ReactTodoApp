import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import Button from '../Button/Button';
import ValidationMessage from '../ValidationMessage/ValidationMessage';
import PriorityOption from '../PriorityOption/PriorityOption';

import { ReactComponent as CalendarIcon } from '../../Assets/monthly-calendar-svgrepo-com.svg';
import './AddForm.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ERROR_MESSAGES } from '../../constants/constants';

function AddForm({
    toggleFormVisability,
    todoItem,
    callback //add or edit
}) {

    let todo = {
        isImportant: true,
        isFinished: false,
    };

    if (todoItem) {
        todo = todoItem;
    }

    const [inputValue, setInputValue] = useState(todo.text || '');
    const [TodoDeadline, setTodoDeadline] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isDangerClass, setIsDangerClass] = useState(false);
    const [dangerClassDate, setDangerClassDate] = useState(false);
    const [isCheck, setIsCheck] = useState(true);
    const [todoPriority, setTodoPriority] = useState(todo.priority || 0);

    const inputRef = useRef(null);

    useEffect(() => {
        setTodoDeadline(todo.deadline ? new Date(todo.deadline) : new Date());
        inputRef.current.focus();

    }, []);

    const isValidationDate = () => {
        const DAY_IN_MS = 86400000;
        if (!TodoDeadline) {
            setErrorMessage(ERROR_MESSAGES.emptyDate);
            setDangerClassDate(true);

            return false;
        }

        if (TodoDeadline <= new Date(Date.now() - DAY_IN_MS)) {
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

    const setTodoTodoDeadline = () => {
        todo.deadline = TodoDeadline.toISOString();
    };


    const onChangeTodoDeadline = (date) => {
        setTodoDeadline(date);
    };

    const onClearTodoDeadlineInput = () => {
        setTodoDeadline(null);
    };

    const setTodoText = () => {
        todo.text = inputValue;
    };

    const callbackHandler = () => {
        callback(todo);
    };

    const onClearInput = () => {
        setInputValue('');
    };

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const defaultButtonClickAction = () => {
        toggleFormVisability();
        onClearInput();
        onClearTodoDeadlineInput();
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
        setTodoTodoDeadline();
        setTodoText();
        callbackHandler();

        defaultButtonClickAction();
    };

    const onCancel = (e) => {
        e.preventDefault();

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
                        placeholder='Task name'
                    />
                    <div className='datepicker-row'>
                        <DatePicker
                            className={'my-datepicker-container '
                                + (dangerClassDate ? 'my-datepicker-container__danger' : '')
                            }
                            dateFormat="dd/MM/yyyy"
                            selected={TodoDeadline}
                            onChange={(date) => {
                                onChangeTodoDeadline(date);
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

AddForm.propTypes = {
    callback: PropTypes.func.isRequired,
    toggleFormVisability: PropTypes.func.isRequired
};


export default AddForm;
