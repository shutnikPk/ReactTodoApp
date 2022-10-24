//testTask
import todos from "./TestTodoTasks/testTasks";

//ReactHooks
import { useState } from "react";

//components
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
