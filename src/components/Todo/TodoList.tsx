import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodosContext.tsx";
import "./TodoList.css";
import DeleteIcon from '@mui/icons-material/Delete';

interface ITodo {
  id: number;
  title: string;
  description?: string;
  subTasks?: ITodo[];
}

const TodoItem: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo && deleteTodo(todo.id);
  };

  return (
    <>
      <div className="TodoItem item">
        <div className="TodoItemHead">
          <h4>{todo.title}</h4>
          <button className='secondary' onClick={handleDelete}><DeleteIcon sx={{ color: "#f58733" }}/></button>
        </div>

        {todo.description && <p className="todoDescription">{todo.description}</p>}
        {todo.subTasks && (
          <div >
            {todo.subTasks.map((subTask) => (
              <TodoItem key={subTask.id} todo={subTask} />
            ))}
          </div>
        )}
      </div>

    </>
  );
};

export const TodoForm: React.FC = () => {
  const { addTodo }: any = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      alert("Title can't be empty");
      return;
    }
    addTodo && addTodo({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");

  };

  return (
    <div className="Todo">
      <h2>Add Todo</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>
            Description:
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

        </div>
        <button type="submit" className="primary" >Add Todo</button>
      </form>
    </div>
  );
};

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="">

      <h2>Todo List</h2>
      <div className="TodoListContainer container">
        {todos.length === 0 ? (
          <p>No todos yet. Add one!</p>
        ) : (
          <>
            {todos.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
