const express = require("express");
const { CreateTodoSchema, UpdateTodoSchema } = require("./types");
const jwt = require("jsonwebtoken");
const connect = require("./models/dbConnection");
const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  //get all the todos
});
app.post("/todo", (req, res) => {
  const todo = CreateTodoSchema.safeParse(req.body);
  if (!todo.success) {
    return res.status(400).json({ msg: "invalid input" });
  }
  //todo, give it an id
});
app.put("/complete", (req, res) => {});
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
