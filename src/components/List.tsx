import React, { useContext } from 'react';
import { TodosContext } from '../context/TodoContext';
import Item from './Item';

interface ListProps {}

const List: React.FC<ListProps> = () => {
    const { todos, setTodos } = useContext(TodosContext) || {};
    const toogleItem = (id: number) => {
        if (setTodos && todos) {
            setTodos(todos.map((e) => {
                if (e.id === id) {
                    return {
                        ...e,
                        completed: !e.completed
                    }
                }
                return e
            }))
        }
    }

    const deleteItem = (id: number) => {
        if (setTodos && todos) {
            setTodos(todos.filter((e) => e.id !== id))
        }
     }

    return (
        <>
        <br />
        {todos?.map((e) => {
            return <Item toogleItem={toogleItem} deleteItem={deleteItem} key={e.id} todo={e} />
        })}
        {
            !todos?.length && <p> No todos</p>
        }
        </>   

    );
};

export default List;