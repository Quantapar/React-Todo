import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
function App() {
  return (
    <div>
      <CreateTodo />
      <Todos
        todos={[
          { title: "Gym", description: "Leg day", completed: false },
          { title: "Study", description: "React", completed: true },
        ]}
      ></Todos>
    </div>
  );
}

export default App;
