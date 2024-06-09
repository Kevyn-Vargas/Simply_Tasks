import React from "react";
import "./style.css";
import { TodoContext } from "../TodoContext";

function NewTask({ children }) {
  const { name, isNameLoading } = React.useContext(TodoContext);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 480);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="new-task-contenedor">
      <h1 className="title-new-task">
        Hello
        {!isNameLoading ? (
          <span className="name-text">{`${name}`}! </span>
        ) : isMobile ? (
          <span className="loading-text"> User ... </span>
        ) : (
          <span className="loading-box">
            <div className="WH animation color"></div>
            <div className="WH animation color"></div>
            <div className="WH animation color"></div>
          </span>
        )}
        Welcome to Simply_Tasks!
      </h1>
      <h3>Organize your day and stay productive.</h3>
      <h3 className="subtitle-new-task">Task Name</h3>
      {children}
    </div>
  );
}

export default NewTask;