import React from "react";
import "./style.css";
import { TodoContext } from "../TodoContext";

function CreateTask() {
  const { addTask, todos } = React.useContext(TodoContext);

  const [newTaskValue, setnewTaskValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (todos.some((todo) => todo.text.toLowerCase() === newTaskValue.toLowerCase())) {
      alert("A task with that name already exists");
      return;
    }
    if (newTaskValue.length > 1) {
      addTask(newTaskValue);
      setnewTaskValue("");
    }
    else {
      alert("Write something")
    }
  };

  const onChange = (event) => {
    setnewTaskValue(event.target.value);
  };

  return (
    <form className="input-container-new-task" onSubmit={onSubmit}>
      <input
        className="input-new-task"
        type="text"
        placeholder="Write a new task"
        value={newTaskValue}
        onChange={onChange}
      />
      <button type="submit" className="button-create-task">
        Create Task
      </button>
    </form>
  );
}
export default CreateTask;
