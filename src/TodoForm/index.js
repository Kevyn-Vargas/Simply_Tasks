import React from "react";
import "./style.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { saveName, setOpenModal } = React.useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = event.target.elements.name.value;
    saveName(newName);
    setOpenModal(false);
  };

  return (
    <div className="container-modal">
      <button
        className="button-close-modal"
        onClick={() => setOpenModal(false)}
      >
      </button>
      <form className="form-modal" onSubmit={handleSubmit}>
        <h3 className="title-modal">Personaliza Simply_Tasks</h3>
        <input
          className="input-modal"
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
        />
        <button
          className="button-submit-modal"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
