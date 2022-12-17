import './App.css';

import {
    useState
} from 'react';

import AddForm from './components/AddForm/AddForm';
import Popup from './components/Popup/Popup';
import Button from './components/Button/Button';
import TodoCard from './components/TodoCard/TodoCard';

function App() {
    const [todoItems, setTodoItems] = useState(
        JSON.parse(localStorage.getItem('Todos')) || []
    );

    const [visibleForm, setVisibleForm] = useState(false);
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [visibleAddBtn, setVisibleAddBtn] = useState(true);

    const [postId, setPostId] = useState(null);

    const addTodo = (todo) => {
        todo.id = todoItems.length + 1;
        const tmpArr = [...todoItems, todo];
        localStorage.setItem('Todos', JSON.stringify(tmpArr));
        setTodoItems(tmpArr);
    };

    const setId = (id) => setPostId(id);

    const onDelete = (id) => {
        let tmpArr = [...todoItems];
        tmpArr = tmpArr.filter((e) => e.id !== id);
        tmpArr = reCalculateId(tmpArr);
        localStorage.setItem('Todos', JSON.stringify(tmpArr));
        setTodoItems(tmpArr);
    };

    const reCalculateId = (arr) => {
        const tmpArr = arr.map((e, i) => {
            e.id = i + 1;
            return e;
        });
        return tmpArr;
    };

    const onClickAcceptDelete = () => {
        onDelete(postId);
        setVisiblePopup(false);
    };

    const onClickDeleteButton = (id) => {
        setVisiblePopup(true);
        setId(id);
    };

    const onClickAddTodoButton = () => {
        setVisibleForm(true);
        setVisibleAddBtn(false);
    };

    const toggleFormVisability = () => {
        setVisibleForm(false);
        setVisibleAddBtn(true);
    };

    return (
        <div className="App">
            {visiblePopup &&
                (
                    <Popup>
                        <Button
                            name={'Delete'}
                            className={'button button__danger  button__danger__delete'}
                            onClick={() => onClickAcceptDelete()}
                        />
                        <Button
                            name={'Cancel'}
                            className={'button'}
                            onClick={() => setVisiblePopup(false)}
                        />

                    </Popup>
                )}

            {visibleAddBtn &&
                <Button
                    name={'Add Todo'}
                    className={'button button__add'}
                    onClick={() => onClickAddTodoButton()}
                />}

            {visibleForm && (
                <AddForm
                    toggleFormVisability={() => toggleFormVisability()}
                    addTodo={addTodo}
                />)
            }

            {(() => {
                if (todoItems.length) {
                    return (
                        < div className="todos-container" >
                            {
                                todoItems.map((e) => (
                                    <TodoCard
                                        key={e.id}
                                        todo={e}
                                        onClickDeleteButton={onClickDeleteButton}
                                    />
                                ))
                            }
                        </div>
                    );
                } <p>No Tasks Yet</p>;
            })()}
            {/* это сложнее чем тернорка же? */}
        </div >
    );
}

export default App;
