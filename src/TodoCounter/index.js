import React from "react";
import "./style.css";
import { TodoContext } from "../TodoContext/index.js";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  const [loading, setLoading] = React.useState(true);
  const [showCongratulations, setShowCongratulations] = React.useState(false);

  React.useEffect(() => {
    if (totalTodos !== undefined) {
      setLoading(false);
      setShowCongratulations(completedTodos === totalTodos && totalTodos > 0);
    }
  }, [totalTodos, completedTodos]);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1 className="title-counter-first">Your Tasks</h1>
          <h2 className="title-counter-second">
            {showCongratulations ? (
              <span className="all-tasks-completed">Congratulations, you have finished all your tasks</span>
            ) : (
              <>
                Completed{" "}
                <span className="props-counter completed">{completedTodos}</span> of{" "}
                <span className="props-counter total">{totalTodos}</span> TODOS
              </>
            )}
          </h2>
        </div>
      )}
    </div>
  );
}

export default TodoCounter;