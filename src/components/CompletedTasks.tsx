import React, { useContext } from 'react';
import { TodosContext } from '../context/TodoContext';

interface ListProps {
}

const CompletedTasks: React.FC<ListProps> = () => {
    const { todos } = useContext(TodosContext) || {}; 
    const getCompletedTasks = () => todos?.filter((e) => e.completed === true).length

    return (
        <p> You have {getCompletedTasks()} tasks completed</p>
    );
};

export default CompletedTasks;