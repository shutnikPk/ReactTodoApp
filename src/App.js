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
    if (!todo.text.trim()) return;
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
    tmpArr = reCalculateId(tmpArr);
    setTodoItems(tmpArr);
  };

  const reCalculateId = (arr) => {
    let tmpArr = arr.map((e, i) => {
      e.id = i + 1;
      return e;
    });
    return tmpArr;
  };

  return (
    <div className="App">
      <Popup
        onDelete={() => onDelete(postId)}
        toggleActivity={toggleActivity}
        activeClass={activeClass.popup}
      />
      <AddButton
        activeClass={activeClass.addbtn}
        toggleActivity={toggleActivity}
      />
      <AddForm
        activeClass={activeClass.form}
        toggleActivity={toggleActivity}
        addTodo={addTodo}
      />
      <TodoCards
        getId={getId}
        toggleActivity={toggleActivity}
        todos={todoItems}
      />
    </div>
  );
}

export default App;
