import React, { useContext, useState } from 'react';
import { TodosContext } from '../context/TodoContext';

interface ListProps {
}

const InputTodo: React.FC<ListProps> = () => {
    const [task, setTask] = useState<string>('')
    const { todos, setTodos } = useContext(TodosContext) || {};
    
    const handleKeyUp = (e: any) => {
        if (!task) return;
        if (e.keyCode === 13) {
            addTodo();
        }
      };

      const addTodo = () => {
        if (setTodos && todos) {
            setTodos([...todos, {
                id: todos.length + 1,
                title: task,
                completed: false
            }])
            setTask('')
        }
       }

    return (
        <>
            <p> Add todo</p>
            <input onKeyUp={(e: any) => handleKeyUp(e)} placeholder='new todo' value={task} onChange={(e) => setTask(e.target.value)} type="text" />
            <button  disabled={!task} onClick={() => {
                if (setTodos && todos) {
                    setTodos([...todos, {
                        id: todos.length + 1,
                        title: task,
                        completed: false
                    }])
                    setTask('')
                }
            }}> Add todo </button>
        </>

    );
};

export default InputTodo;