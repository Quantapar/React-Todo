import { useState } from "react";
import "./CreateTodo.css";

export function CreateTodo() {
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
      />
      <input
        type="text"
        placeholder="Description"
        className="todo-input"
        onChange={function (e) {
          setdescription(e.target.value);
        }}
      />
      <button
        className="add-todo-button"
        onClick={() => {
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
            // alert("Todo Added");
            window.location.reload();
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
