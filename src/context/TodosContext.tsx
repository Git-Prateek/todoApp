import React, { createContext, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  subTasks: Todo[];
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
