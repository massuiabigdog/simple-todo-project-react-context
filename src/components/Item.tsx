import React from 'react';
import { TodoType } from '../context/TodoContext';

interface ItemProps {
    todo: TodoType;
    toogleItem: (id: number) => void;
    deleteItem: (id: number) => void;
}

const List: React.FC<ItemProps> = ({ todo, toogleItem, deleteItem }) => {
    return (
        <div style={{maxWidth: 400, textAlign: 'center', backgroundColor: '#eee', padding: 10, margin: 10}}>
            <h3>{todo.title}</h3>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
            <button onClick={() => toogleItem(todo.id)}>{todo.completed ? 'uncheck' : 'check'}</button>
            <button onClick={() => deleteItem(todo.id)} >Delete</button>
        </div>
    );
};

export default List;