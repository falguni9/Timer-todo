import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function BtnComponent(props) {
  const [show, setShow] = useState(false);
    const [todo, setTodo] = useState("");

    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      setShow(false);
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
       setShow(false);
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
     setShow(false);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
    setShow(!false);
  };
  return (
    <div>
      {props.status === 3 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          variant="primary"
          onClick={handleShow}
        >
          save
        </button>
      ) : (
        ""
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Enter Task Title</h1>
          <TodoForm
            handleSubmit={handleSubmit}
            todo={todo}
            editId={editId}
            setTodo={setTodo}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {props.status === 0 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.start}
          >
            Start
          </button>
          <button
            className=" bg stopwatch-btn stopwatch-btn-red"
            onClick={props.stop}
            disabled
          >
            Stop
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-red "
            variant="primary"
            onClick={handleShow}
            disabled
          >
            save
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-red"
            onClick={props.start}
            disabled
          >
            Start
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.stop}
          >
            Stop
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-red"
            variant="primary"
            onClick={handleShow}
          >
            save
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.start}
          >
            Start
          </button>
          <button
            className=" bg stopwatch-btn stopwatch-btn-red"
            onClick={props.stop}
            disabled
          >
            Stop
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-gre  "
            variant="primary"
            onClick={handleShow}
          >
            save
          </button>
        </div>
      ) : (
        ""
      )}
      {props.status === 3 ? (
        <div className="stopwatch-btn stopwatch-btn-gre">{/* <Model /> */}</div>
      ) : (
        ""
      )}
      <div className="App">
        <div className="  w-100">
          <TodoList
            todos={todos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            todosTime={props.time}
          />
        </div>
      </div>
    </div>
  );
}

export default BtnComponent;
