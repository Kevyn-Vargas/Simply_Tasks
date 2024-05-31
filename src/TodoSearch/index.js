import React from "react";
import "./style.css";
import {TodoContext} from "../TodoContext/index.js"

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="input-container">
      <input
        className="input-search"
        placeholder="Hacer commit a la app"
        type="text"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <span className="search-icon"></span>
    </div>
  );
}

export default TodoSearch;
