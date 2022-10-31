import todos from "./TestTodoTasks/testTasks";
import "./App.css";

import { useState } from "react";

import TodoCards from "./components/TodoCards/TodoCards";
import AddForm from "./components/AddForm/AddForm";
import AddButton from "./components/AddButton/AddButton";

function App() {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("Todos")) || []
  );

  const [activeClass, setActiveClass] = useState(true);

  const addTodo = (todo) => {
    todo.id = todoItems.length + 1;
    const tmpArr = [...todoItems, todo];
    localStorage.setItem("Todods", JSON.stringify(tmpArr));
    console.log(JSON.parse(localStorage.getItem("Todods")));
    setTodoItems(tmpArr);
  };

  const toggleActivity = () => {
    setActiveClass(!activeClass);
  };

  return (
    <div className="App">
      <AddButton activeClass={activeClass} toggleActivity={toggleActivity} />
      <TodoCards todos={todoItems} />
      <AddForm
        activeClass={activeClass}
        toggleActivity={toggleActivity}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
