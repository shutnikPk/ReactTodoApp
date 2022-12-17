import './App.css';

import {
    useState
} from 'react';

import AddForm from './components/AddForm/AddForm';
import Popup from './components/Popup/Popup';
import Button from './components/Button/Button';
import TodoCardsList from './components/TodoCarsList/TodoCardsList';

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

    const deleteTodo = (id) => {
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

    const onConfirmDelete = () => {
        deleteTodo(postId);
        setVisiblePopup(false);
    };

    const onDelete = (id) => {
        setVisiblePopup(true);
        setPostId(id);
    };

    const onAdd = () => {
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
                            onClick={() => onConfirmDelete()}
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
                    onClick={() => onAdd()}
                />}

            {visibleForm && (
                <AddForm
                    toggleFormVisability={() => toggleFormVisability()}
                    addTodo={addTodo}
                />)
            }

            <TodoCardsList todoItems={todoItems} onDelete={onDelete} />

        </div >
    );
}

export default App;
