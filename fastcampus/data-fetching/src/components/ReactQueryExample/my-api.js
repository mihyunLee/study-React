import axios from "axios";

export const getTodos = () => axios.get("/api/todos").then((res) => res.data);

export const postTodos = (todo) =>
  axios.post("/api/todo", { todo }).then((res) => res.data);
