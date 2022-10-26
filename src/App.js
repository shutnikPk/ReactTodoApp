import todos from "./TestTodoTasks/testTasks";

import { useState } from "react";

import TodoCards from "./components/TodoCards/TodoCards";

function App() {
  
  const [todoItems, setTodoItems] = useState(todos);

  return (
    <div className="App">
      <TodoCards todos={todoItems} />
    </div>
  );
}

export default App;
