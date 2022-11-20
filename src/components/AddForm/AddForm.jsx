import React from 'react';

import './AddForm.css';
import {
    useState
} from 'react';
import PropTypes from 'prop-types';

import {
    useEffect
} from 'react';

import {
    useRef
} from 'react';

import DatePicker from 'react-datepicker';

import Button from '../Button/Button';

import ValidationMessage from '../ValidationMessage/ValidationMessage';

import 'react-datepicker/dist/react-datepicker.css';

function AddForm({
    addTodo,
    toggleVisability,

}) {

    const [inputValue, setInputValue] = useState('');
    const [deadline, setDeadline] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [isDangerClass, setIsDangerClass] = useState(false);
    const [dangerClassDate, setDangerClassDate] = useState(false);
    const [isCheck, setIsCheck] = useState(true);

    const inputRef = useRef(null);

    useEffect(() => {
        setDeadline(new Date());
        inputRef.current.focus();

    }, []);

    const ERROR_MESSAGES = {
        emptyTask: 'Empty tasks Name!',
        emptyDate: 'Empty tasks Date!',
        wrongDate: 'Greeting time Travel!'
    };

    const isValidationDate = () => {
        const DAY_IN_MS = 86400000;
        if (!deadline) {
            setErrorMessage(ERROR_MESSAGES.emptyDate);

            setDangerClassDate(true);

            return false;

        }

        if (deadline <= new Date(Date.now() - DAY_IN_MS)) {

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

    const todo = {
        isImportant: true,
        isFinished: false,
    };

    const setTodoDeadline = () => {
        todo.deadline = deadline.toISOString();
    };

    const onChangeDeadline = (date) => {
        setDeadline(date);
    };

    const onClearDeadlineInput = () => {
        setDeadline('');
    };

    const setTodoText = () => {
        todo.text = inputValue;
    };

    const addTodoHandler = () => {
        addTodo(todo);

    };

    const onClearInput = () => {
        setInputValue('');
    };

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const defaultButtonClickAction = () => {
        toggleVisability();
        onClearInput();
        onClearDeadlineInput();
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

        setTodoDeadline();
        setTodoText();
        addTodoHandler();

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
                    <DatePicker
                        className={'my-datepicker-container '
                            + (dangerClassDate ? 'my-datepicker-container__danger' : '')
                        }
                        dateFormat="dd/MM/yyyy"
                        selected={deadline}
                        onChange={(date) => {
                            onChangeDeadline(date);
                        }
                        }
                        placeholderText="DD/MM/YYYY"
                    />
                </div>
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
                {!isCheck && (<ValidationMessage textMsg={errorMessage} />)}
            </div>

        </form >
    );
}

AddForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    toggleVisability: PropTypes.func.isRequired
};


export default AddForm;
