import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Modal({ children, setOpenModal }) {
  return ReactDOM.createPortal(
    <div
      className="modal-background"
      onClick={(e) => {
        if (e.target.className === "modal-background") {
          setOpenModal(false);
        }
      }}
    >
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
