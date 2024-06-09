import "./style.css";
import photogirl from "../img/girl.png";

function EmptyTodos() {
  return (
    <div className="div-empty">
      <h2 className="title-empty">No task found, try again or create a new task.</h2>
      <img className="img-girl" src={photogirl} alt="" />
    </div>
  );
}

export default EmptyTodos;
