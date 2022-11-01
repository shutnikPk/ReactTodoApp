import todos from "./TestTodoTasks/testTasks";
import "./App.css";

import { useState } from "react";

import TodoCards from "./components/TodoCards/TodoCards";
import AddForm from "./components/AddForm/AddForm";
import AddButton from "./components/AddButton/AddButton";
import Popup from "./components/Popup/Popup";

function App() {
  const [todoItems, setTodoItems] = useState(todos);
  const [activeClass, setActiveClass] = useState({
    form: false,
    popup: false,
    addbtn: true,
  });
  const [postId, setPostId] = useState(null);

  const addTodo = (todo) => {
    todo.id = todoItems.length + 1;
    const tmpArr = [...todoItems, todo];
    setTodoItems(tmpArr);
  };

  const toggleActivity = (obj) => {
    let tmpObj = { ...activeClass, ...obj };
    setActiveClass(tmpObj);
  };

  const getId = (id) => setPostId(id);

  const onDelete = (id) => {
    let tmpArr = [...todoItems];
    tmpArr = tmpArr.filter((e) => e.id !== id);
    setTodoItems(tmpArr);
  };

  return (
    <div className="App">
      <Popup
        onDelete={onDelete}
        toggleActivity={toggleActivity}
        postId={postId}
        activeClass={activeClass.popup}
      />
      <AddButton
        activeClass={activeClass.addbtn}
        toggleActivity={toggleActivity}
      />
      <TodoCards
        getId={getId}
        toggleActivity={toggleActivity}
        onDelete={onDelete}
        todos={todoItems}
      />
      <AddForm
        activeClass={activeClass.form}
        toggleActivity={toggleActivity}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
