const express = require("express");
const { CreateTodoSchema, UpdateTodoSchema } = require("./types");
const jwt = require("jsonwebtoken");
const connect = require("./models/dbConnection");
const Todo = require("./models/model");
const app = express();
app.use(express.json());

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  if (todos.length == 0) {
    return res.status(404).json({ msg: "no todo found" });
  }
  res.json(todos);
});
app.post("/todo", async (req, res) => {
  const todoInput = CreateTodoSchema.safeParse(req.body);

  if (!todoInput.success) {
    return res.status(400).json({ msg: "invalid input" });
  }
  const { title, description, completed } = todoInput.data;

  const todo = await Todo.create({
    title,
    description,
    completed,
  });
  res.json({ todo: todo });

  //todo, give it an id
});
app.put("/complete", async (req, res) => {
  const id = req.body.id;
  const idInput = UpdateTodoSchema.safeParse({ id });
  if (!idInput.success) {
    return res.status(400).json({ msg: "invalid id input" });
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ msg: "no todo with this id exists" });
  }
  todo.completed = true;
  await todo.save();
  res.json({ todo: todo, msg: "todo marked as completed" });
});
app.put("/todo/:id", (req, res) => {
  const id = req.params.id;
  const idInput = UpdateTodoSchema.safeParse({ id });
  if (!idInput.success) {
    return res.status(400).json({ msg: "invalid input" });
  }
  //edit the todo with the particular id
});
app.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  //delete the todo with particular id
});
connect();
app.listen(3030);
