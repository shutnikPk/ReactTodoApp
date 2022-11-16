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
    const [visible, setVisible] = useState({
        form: false,
        popup: false,
        addbtn: true,
    });
    const [postId, setPostId] = useState(null);

    const addTodo = (todo) => {        
        todo.id = todoItems.length + 1;
        const tmpArr = [...todoItems, todo];
        localStorage.setItem('Todos', JSON.stringify(tmpArr));
        setTodoItems(tmpArr);
    };

    const toggleVisability = (obj) => {
        const tmpObj = {
            ...visible, ...obj 
        };
        setVisible(tmpObj);
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

    const onClickDeleteButton = () => {
        onDelete(postId);
        toggleVisability({
            popup: false,
        });
    };

    const onClickCrossButton = (id) => {
        toggleVisability({
            popup: true 
        });
        setId(id);
    };

    return (
        <div className="App">
            <Popup
                onClickDeleteButton={onClickDeleteButton}
                visible={visible.popup}
                toggleVisability={toggleVisability}
            >
                <Button
                    name={'Delete'}
                    className={'button button__danger'}
                    onClick={() => onClickDeleteButton()}
                />
                <Button
                    name={'Cancel'}
                    className={'button'}
                    onClick={() => toggleVisability({
                        'popup': false
                    })}
                />

            </Popup>
            <Button
                name={'Add Todo'}
                className={'button button__add'}
                visible={visible.addbtn}
                onClick={() => toggleVisability({
                    'addbtn': false, 'form': true 
                })}
            />

            {visible.form && (
                <AddForm
                    toggleVisability={()=>toggleVisability({
                        'addbtn': true,
                        'form': false
                    })}
                    addTodo={addTodo}
                />)
            }
           
            {todoItems.length ? (
                <div className="todos-container">
                    {todoItems.map((e) => (
                        <TodoCard
                            onClickCrossButton={onClickCrossButton}
                            key={e.id}
                            todo={e}
                        />
                    ))}
                </div>
            ) : (
                <p>No Tasks Yet</p>
            )}
        </div>
    );
}

export default App;
