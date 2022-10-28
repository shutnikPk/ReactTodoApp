import todos from "./TestTodoTasks/testTasks";

import { useState } from "react";

import TodoCards from "./components/TodoCards/TodoCards";
import AddForm from "./components/AddForm/AddForm";

function App() {
  const [todoItems, setTodoItems] = useState(todos);

  const addTodo = (todo) => {
    todo.id = todoItems.length + 1;
    const tmpArr = [...todoItems, todo];
    setTodoItems(tmpArr);
  };

  return (
    <div className="App">
      <TodoCards todos={todoItems} />
      <AddForm addTodo={addTodo} />
    </div>
  );
}

export default App;
