import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddItem: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (!enteredText.trim().length) {
      // throw an error
      return;
    }
    props.onAddItem(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo Text</label>
      <input ref={todoTextInputRef} type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
