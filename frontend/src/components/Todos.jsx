import "./Todos.css";

export function Todos({ todos }) {
  return (
    <div className="todos-container">
      {todos.map(function (todo, index) {
        return (
          <div
            key={index}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <h3 className="todo-title">{todo.title}</h3>
            <h4 className="todo-description">{todo.description}</h4>
            <button
              className={`todo-button ${
                todo.completed ? "completed-button" : ""
              }`}
            >
              {todo.completed == true ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
