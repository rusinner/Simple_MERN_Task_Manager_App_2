import express from "express";

import {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  completeTodo,
  getSingleTodo,
} from "../controllers/Todo.js";

const router = express.Router();

router.get("/todos", getAllTodos);

router.get("/todo/:id", getSingleTodo);

router.post("/todo/new", createTodo);

router.delete("/todo/delete/:id", deleteTodo);

router.patch("/todo/update/:id", updateTodo);

router.patch("/todo/complete/:id", completeTodo);

export default router;
