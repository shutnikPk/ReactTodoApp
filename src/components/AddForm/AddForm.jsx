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

import Button from '../Button/Button';

import ValidationMessage from '../ValidationMessage/ValidationMessage';

import InputField from './InputField/InputField';
import MyDatePicker from './InputField/MyDatePicker/MyDatePicker';

function AddForm({
    addTodo,
    toggleVisability,
    visible
}) {

    const [inputValue, setInputValue] = useState('');
    const [deadline, setDeadline] = useState(new Date());
    const [validMsg, setValidMsg] = useState('');
    const [dangerClass, setDangerClass] = useState(false);
    const [dangerClassDate, setDangerClassDate] = useState(false);

    const inputContainer = useRef(null);

    useEffect(() => {
        switch (validMsg) {
            case 'Empty tasks Date!':
                setDangerClass(true);
                setDangerClassDate(true);
                break;
            case 'Greeting time Travel!':
                setDangerClass(true);
                setDangerClassDate(true);
                break;
            case 'Empty tasks Name!':
                setDangerClass(true);
                inputContainer.current.focus();
        }
    }, [validMsg]);

    const todo = {
        isImportant: true,
        isFinished: false,
    };

    const setTodoDeadline = () => {
        if (!deadline) {
            showValidMsg('Empty tasks Date!');

            return;
        }

        if (deadline <= new Date(Date.now() - 86400000)) {
            showValidMsg('Greeting time Travel!');

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

    const setTodoText = () => {
        if (!inputValue.trim()) {
            showValidMsg('Empty tasks Name!');
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

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const onSave = (e) => {
        e.preventDefault();
        if (
            !setTodoText() ||
            !setTodoDeadline()
        ) { return; }
        toggleVisability();
        onClearInput();
        setTodoDeadline();
        setTodoText();
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
        setDangerClass(false);
    };

    const showValidMsg = (text) => {
        setValidMsg(text);
    };

    const hideValidMsg = () => {
        setValidMsg(false, '');
    };

    return (
        <form className={
            'add-form '
            + (visible ? '' : 'inactive')}
        >
            <div className='add-form--row-container'>
                {/* <InputField
                    dangerClass={dangerClass}
                    inputValue={inputValue}
                    onChangeInput={onChangeInput}
                    deadline={deadline}
                    onChangeDeadline={onChangeDeadline}
                /> */}

                <div className={'input-container ' + (dangerClass ? 'danger' : '')}>
                    <input
                        ref={inputContainer}
                        className={'input-field'}
                        value={inputValue}
                        type='text'
                        onChange={onChangeInput}
                        placeholder='Add task'
                    />
                    <MyDatePicker
                        dangerClass={dangerClassDate}
                        deadline={deadline}
                        onChangeDeadline={onChangeDeadline}
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
                <ValidationMessage visible={Boolean(validMsg)} textMsg={validMsg} />
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
