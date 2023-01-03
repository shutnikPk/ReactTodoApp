import './App.css';

import { useState } from 'react';

import AddForm from './components/TodoForm/TodoForm';
import Popup from './components/Popup/Popup';
import Button from './components/Button/Button';
import TodoCardsList from './components/TodoCarsList/TodoCardsList';
import Tooltip from './components/Tooltip/Tooltip';

function App() {
    const [todoItems, setTodoItems] = useState(
        JSON.parse(localStorage.getItem('Todos')) || []
    );

    const [visibleAddBtn, setVisibleAddBtn] = useState(true);
    const [deleteTaskId, setDeleteTaskId] = useState(null);
    const [editTaskId, setEditTaskId] = useState(null);

    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipCoords, setTooltipCoords] = useState(null);
    const [tooltipMsg, setTooltipMsg] = useState('');



    const addTodo = (todo) => {
        todo.id = todoItems.length;
        const tmpArr = [...todoItems, todo];
        localStorage.setItem('Todos', JSON.stringify(tmpArr));
        setTodoItems(tmpArr);
    };

    const editTodo = (todo) => {
        const tmpArr = [...todoItems];
        tmpArr.splice(todo.id, 1, todo);
        localStorage.setItem('Todos', JSON.stringify(tmpArr));
        setTodoItems(tmpArr);
    };

    const toggleIsDone = (id) => {
        const tmpArr = [...todoItems];
        tmpArr[id].isDone = !tmpArr[id].isDone;
        localStorage.setItem('Todos', JSON.stringify(tmpArr));
        setTodoItems(tmpArr);
    };

    const deleteTodo = (id) => {
        let tmpArr = [...todoItems];
        tmpArr = tmpArr.filter((e) => e.id !== id);
        tmpArr = reCalculateId(tmpArr);
        localStorage.setItem('Todos', JSON.stringify(tmpArr));
        setTodoItems(tmpArr);
    };

    const reCalculateId = (arr) => {
        const tmpArr = arr.map((e, i) => {
            e.id = i;
            return e;
        });
        return tmpArr;
    };

    const onConfirmDelete = () => {
        deleteTodo(deleteTaskId);
        setDeleteTaskId(null);
    };

    const openForm = () => {
        setEditTaskId(null);
        setVisibleAddBtn(false);
    };



    const showTooltipHandler = e => {
        if (e.currentTarget.getAttribute('tooltip')) {
            const elem = e.currentTarget;
            elem.getBoundingClientRect();
            setShowTooltip(true);
            setTooltipCoords({ x: elem.getBoundingClientRect().x, y: elem.getBoundingClientRect().y });
            setTooltipMsg(elem.getAttribute('tooltip'));
        }
    };

    return (
        <div className="App">
            {deleteTaskId !== null &&
                (
                    <Popup
                        onConfirmDelete={onConfirmDelete}
                        setDeleteTaskId={setDeleteTaskId}
                    />
                )}

            {visibleAddBtn &&
                <Button
                    name={'Add Todo'}
                    className={'button button__add'}
                    onClick={() => openForm()}
                />}

            {!visibleAddBtn && (
                <AddForm
                    onMouseEnter={(e) => showTooltipHandler(e)}
                    onMouseLeave={() => setShowTooltip(false)}
                    closeForm={() => setVisibleAddBtn(true)}
                    onSubmit={addTodo}
                />)
            }

            <TodoCardsList
                onMouseEnter={(e) => showTooltipHandler(e)}
                onMouseLeave={() => setShowTooltip(false)}
                toggleIsDone={toggleIsDone}
                closeForm={() => setVisibleAddBtn(true)}
                setEditTaskId={setEditTaskId}
                editTaskId={editTaskId}
                onEdit={editTodo}
                todoItems={todoItems}
                onDelete={(id) => setDeleteTaskId(id)}
            />
            {showTooltip && < Tooltip
                msg={tooltipMsg}
                x={tooltipCoords.x}
                y={tooltipCoords.y} />}
        </div>
    );
}

export default App;
