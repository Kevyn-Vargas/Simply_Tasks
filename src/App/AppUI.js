import React from "react";
import NewTask from "../NewTask/index.js";
import TodoItem from "../TodoItem/index.js";
import TodoCounter from "../TodoCounter/index.js";
import TodoSearch from "../TodoSearch/index.js";
import TodoList from "../TodoList/index.js";
import CreateTask from "../CreateTask/index.js";
import imgTask from "../img/young-men-working.png";
import TodoLoading from "../TodoLoading/index.js";
import TodoError from "../TodoError/index.js";
import EmptyTodos from "../EmptyTodos/index.js";
import Modal from "../Modal/index.js";
import UserPersonalization from "../UserPersonalization/index.js";
import TodoForm from "../TodoForm/index.js";
import { TodoContext } from "../TodoContext/index.js";

function AppUI() {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <main className="app">
        <div className="box-new-task">
          <NewTask>
            <CreateTask/>
            <img src={imgTask} alt="Task Man" />
          </NewTask>
        </div>

        <div className="box-tasks">
          <div className="box-task-list">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
              {loading && <TodoLoading />}
              {error && <TodoError />}
              {!loading && searchTodos.length === 0 && <EmptyTodos />}
              {searchTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
          <UserPersonalization setOpenModal={setOpenModal}/>
        </div>

        {openModal && (
          <Modal setOpenModal={setOpenModal}><TodoForm setOpenModal={setOpenModal}
          /></Modal>
        )}
      </main>
    </>
  );
}

export default AppUI;
