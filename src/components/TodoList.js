import React from "react";
import Button from "react-bootstrap/Button";
const TodoList = ({ todos, handleDelete, handleEdit, todosTime }) => {
 
  todosTime = Object.values(todosTime);

  return (
    <ul className="allTodos">
      {todos.map((t, i) => (
        <li className="singleTodo" key={i}>
          <span className="todoText">{t.todo}</span>
          <span className="todoText">{`${todosTime[3]} : ${todosTime[2]} : ${todosTime[1]}`}</span>

          <Button className="" onClick={() => handleEdit(t.id)}>
            Edit
          </Button>
          <Button className="m-1" onClick={() => handleDelete(t.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
