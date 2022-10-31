import todos from "./TestTodoTasks/testTasks";
import "./App.css";

import { useState } from "react";

import TodoCards from "./components/TodoCards/TodoCards";
import AddForm from "./components/AddForm/AddForm";
import AddButton from "./components/AddButton/AddButton";

function App() {
  const [todoItems, setTodoItems] = useState(todos);
  const [activeClass, setActiveClass] = useState(true);

  const addTodo = (todo) => {
    todo.id = todoItems.length + 1;
    const tmpArr = [...todoItems, todo];
    setTodoItems(tmpArr);
  };

  const toggleActivity = () => {
    setActiveClass(!activeClass);
  };

  const onDelete=(id)=>{
    let tmpArr = [...todoItems]
    tmpArr=tmpArr.filter(e=>e.id!==id)
    setTodoItems(tmpArr)
  }

  return (
    <div className="App">
      <AddButton activeClass={activeClass} toggleActivity={toggleActivity} />
      <TodoCards onDelete={onDelete} todos={todoItems} />
      <AddForm
        activeClass={activeClass}
        toggleActivity={toggleActivity}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
