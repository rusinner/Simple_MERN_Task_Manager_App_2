import { Todo } from "../models/Todo.js";

// get the whole list
export const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};
//create new todo item
export const createTodo = (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  todo.save();
  res.json(todo);
};
//delete single todo item
export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  const deletedTodo = await Todo.findByIdAndDelete(id);
  res.json(deletedTodo);
};
//update single todo item
export const updateTodo = async (req, res) => {
  const id = req.params.id;
  const updatedTodo = await Todo.findByIdAndUpdate(id, {
    text: req.body.text,
    complete: req.body.complete,
    timestamp: req.body.timestamp,
  });
  res.json(updatedTodo);
};
//make todo completed
export const completeTodo = async (req, res) => {
  const id = req.params.id;
  const completedTodo = await Todo.findById(id);
  completedTodo.complete = !completedTodo.complete;
  completedTodo.save();
  res.json(completedTodo);
};

//get single todo
export const getSingleTodo = async (req, res) => {
  const id = req.params.id;
  const todos = await Todo.findById(id);
  res.json(todos);
};
