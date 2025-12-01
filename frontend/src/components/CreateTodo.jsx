import "./CreateTodo.css";

export function CreateTodo() {
  return (
    <div className="create-todo-container">
      <input type="text" placeholder="Title" className="todo-input" />
      <input type="text" placeholder="Description" className="todo-input" />
      <button className="add-todo-button">Add a todo</button>
    </div>
  );
}
