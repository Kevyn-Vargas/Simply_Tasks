import "./style.css"

function TodoList({children}) {
  return (
    <ul className="container-list">
        {children}
    </ul>
  )
}

export default TodoList;