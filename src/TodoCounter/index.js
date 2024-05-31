import React, { useState, useEffect } from "react";
import "./style.css";
import { TodoContext } from "../TodoContext/index.js";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  const [loading, setLoading] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
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
              "Congratulations, you have finished all your tasks"
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