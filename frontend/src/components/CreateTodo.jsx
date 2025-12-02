import { useState } from "react";
import "./CreateTodo.css";

export function CreateTodo({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  return (
    <div className="create-todo-container">
      <input
        type="text"
        placeholder="Title"
        className="todo-input"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <input
        type="text"
        placeholder="Description"
        className="todo-input"
        onChange={function (e) {
          setdescription(e.target.value);
        }}
        value={description}
      />
      <button
        className="add-todo-button"
        onClick={() => {
          if (!title || !description) {
            alert("pls enter the todo and des");
            return;
          }
          fetch("http://localhost:3030/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // imp for zod validation
            },
            body: JSON.stringify({
              title: title,
              description: description,
              completed: false,
            }),
          }).then(async function (res) {
            const json = await res.json();
            setTodos((prev) => [
              {
                title: title,
                description: description,
                completed: false,
              },
              ...todos,
            ]);
            setTitle("");
            setdescription("");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
