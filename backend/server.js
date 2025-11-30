const express = require("express");
const inputvalidation = require("./types");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  //get all the todos
});
app.post("/todo", (req, res) => {
  //todo, give it an id
});
app.put("/complete", (req, res) => {});
app.put("todo/:id", (req, res) => {
  const id = req.params.id;
  //edit the todo with the particular id
});
app.delete("todo/:id", (req, res) => {
  const id = req.params.id;
  //delete the todo with particular id
});
