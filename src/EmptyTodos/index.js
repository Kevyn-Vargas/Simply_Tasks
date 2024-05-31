import "./style.css";
import photogirl from "../img/girl.png";

function EmptyTodos() {
  return (
    <div>
      <h2 className="title-empty">You have no tasks yet, add the first one!</h2>
      <img className="img" src={photogirl} alt="" />
    </div>
  );
}

export default EmptyTodos;
