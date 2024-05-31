import "./style.css";

function TodoItem(props) {
  return (
    <li className="item">
      <label className="custom-checkbox">
        <span onClick={props.onComplete}
          className={`uncheck-icon ${props.completed && "check-icon"}`}
        ></span>
        <p className="text-task">{props.text}</p>
      </label>
      <div className="container-button-delete">
        <button onClick={props.onDelete} className="delete-button"></button>
      </div>
    </li>
  );
}

export default TodoItem;
