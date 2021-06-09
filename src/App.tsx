import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];

  const handleAddItem = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <NewTodo onAddItem={handleAddItem} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
