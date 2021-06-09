import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text) => {},
  removeTodo: (id) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];

  const handleAddItem = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleRemoveItem = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddItem,
    removeTodo: handleRemoveItem,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
