import classes from './Todos.module.css';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = (props) => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
