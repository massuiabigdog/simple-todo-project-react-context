import React from 'react';
import List from '../components/List';
import InputTodo from '../components/InputTodo';
import CompletedTasks from '../components/CompletedTasks';

const Home: React.FC = () => {
    return (
        <>
            Welcome to todo list!
            <br />
            <List />
            <br />
            <CompletedTasks />
            <InputTodo />
        </>
    );
};

export default Home;