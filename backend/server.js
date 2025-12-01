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
app.put("/todo/:id", async (req, res) => {
  const { title, description, completed } = req.body;
  const id = req.params.id;
  const idInput = UpdateTodoSchema.safeParse({ id });
  if (!idInput.success) {
    return res.status(400).json({ msg: "invalid input" });
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ msg: "no todo with such id exists" });
  }
  todo.title = title;
  todo.description = description;
  todo.completed = completed;
  await todo.save();
  res.status(200).json({ updatedTodo: todo, msg: "todo updated" });
});
app.delete("/todo/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ msg: "no todo with such id exists" });
  }
  const idInput = UpdateTodoSchema.safeParse({ id });
  if (!idInput.success) {
    return res.json({ msg: "invalid input" });
  }
  const todo = await Todo.findByIdAndDelete(id);
  if (!todo) {
    return res.status(404).json({ msg: "no todo with such id exists" });
  }
  res.status(200).json({ msg: "todo deleted" });
});
connect();
app.listen(3030);
