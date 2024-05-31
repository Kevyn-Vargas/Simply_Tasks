import React from "react";
import useLocalStorage from "./UseLocalStorage.js";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    name,
    saveName,
    isNameLoading,
  } = useLocalStorage("Parajana-Version", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter((todos) => {
    const todoText = todos.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    };

    const addTask = (text) => {
      const newTodos = [...todos, { text, completed: false }];
      saveTodos(newTodos);
    };

    return (
      <TodoContext.Provider
        value={{
          todos,
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchTodos,
          completeTodo,
          deleteTodo,
          addTask,
          openModal,
          setOpenModal,
          name,
          saveName,
          isNameLoading,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  }

  

export { TodoContext, TodoProvider };
