import { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (!enteredText.trim().length) {
      // throw an error
      return;
    }
    ctx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo Text</label>
      <input ref={todoTextInputRef} type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
