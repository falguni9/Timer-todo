import React from "react";
import Button from "react-bootstrap/Button";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="submit"> {editId ? "Edit" : "Save"}</Button>
    </form>
  );
};

export default TodoForm;
