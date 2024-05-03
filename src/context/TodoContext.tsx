import { createContext, useEffect, useState } from "react";

export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};
export type TodosContextTypes = {
  todos: Array<TodoType>;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export const TodosContext = createContext<TodosContextTypes | undefined>(
  undefined
);

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const todoSample = [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(() => {
    const todoData = localStorage.getItem("todos");
    return todoData ? JSON.parse(todoData) : todoSample;
  });

  useEffect(() => {
    // ##################################################################
    // ##################################################################
    // If we needed call a api to save/update the data we can do it here
    // ##################################################################
    // ##################################################################
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

//   useEffect(() => {
//     // If we need call the api to fill todos, we can do here
//   }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
