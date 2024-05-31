import "./style.css";
import React from "react";

function UserPersonalization({ setOpenModal }) {
  return (
    <div className="container-button-user">
      <button
        className="button-user"
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      ></button>
    </div>
  );
}

export default UserPersonalization;
