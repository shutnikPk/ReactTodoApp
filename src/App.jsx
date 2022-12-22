import './App.css';

import {
    useState
} from 'react';

import AddForm from './components/TodoForm/TodoForm';
import Popup from './components/Popup/Popup';
import Button from './components/Button/Button';
import TodoCardsList from './components/TodoCarsList/TodoCardsList';

function App() {
    const [todoItems, setTodoItems] = useState(
        JSON.parse(localStorage.getItem('Todos')) || []
    );

    const [visibleAddBtn, setVisibleAddBtn] = useState(true);
    const [deleteTaskId, setDeleteTaskId] = useState(null);
    const [editTaskId, setEditTaskId] = useState(null);



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

    return (
        <div className="App">
            {deleteTaskId !== null &&
                (
                    <Popup>
                        <Button
                            name={'Delete'}
                            className={'button button__danger  button__danger__delete'}
                            onClick={() => onConfirmDelete()}
                        />
                        <Button
                            name={'Cancel'}
                            className={'button'}
                            onClick={() => setDeleteTaskId(null)}
                        />
                    </Popup>
                )}

            {visibleAddBtn &&
                <Button
                    name={'Add Todo'}
                    className={'button button__add'}
                    onClick={() => openForm()}
                />}

            {!visibleAddBtn && (
                <AddForm
                    closeForm={() => setVisibleAddBtn(true)}
                    onSubmit={addTodo}
                />)
            }

            <TodoCardsList
                toggleIsDone={toggleIsDone}
                closeForm={() => setVisibleAddBtn(true)}
                setEditTaskId={setEditTaskId}
                editTaskId={editTaskId}
                onEdit={editTodo}
                todoItems={todoItems}
                onDelete={(id) => setDeleteTaskId(id)}
            />
        </div>
    );
}

export default App;
