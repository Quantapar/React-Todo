import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json);
    });
  }, []);
  async function markTodoComplete(id) {
    await fetch("http://localhost:3030/complete", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? { ...todo, completed: true } : todo
      )
    );
  }
  async function deleteTodo(id) {
    await fetch(`http://localhost:3030/todo/${id}`, {
      method: "DELETE",
    });

    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  }

  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <Todos
        todos={todos}
        onComplete={markTodoComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
