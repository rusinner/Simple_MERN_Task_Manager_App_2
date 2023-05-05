// /fetch the todo list from database
const API_BASE = "http://localhost:5000";

export const getTodos = async () => {
  const data = await fetch(API_BASE + "/todos")
    .then((response) => response.json())
    .catch((err) => console.error("Error: ", err));
  return data;
};
//get single todo
export const getSingleTodo = async (id) => {
  const data = await fetch(API_BASE + "/todo/" + id)
    .then((response) => response.json())
    .catch((err) => console.error("Error: ", err));
  return data;
};

//call the complete todo route and make the item be comleted
export const completeTodo = async (id) => {
  await fetch(API_BASE + "/todo/complete/" + id, {
    method: "PATCH",
    body: JSON.stringify({
      complete: true ? true : false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

//delete single todo
export const deleteTodo = async (id) => {
  await fetch(API_BASE + "/todo/delete/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

//add new todo
export const addTodo = async () => {
  await fetch(API_BASE + "/todo/new", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

//edit single todo

export const EditTodo = async (id) => {
  await fetch(API_BASE + "/todo/update/" + id, {
    method: "PATCH",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
