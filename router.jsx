import { createBrowserRouter } from "react-router-dom";
import { TodoList } from "./TodoList";
import NewTodo from "./NewTodo";

export const router = createBrowserRouter([
  {
    index: true,
    element: <TodoList />,
    loader: ({ request: { signal } }) => {
      return fetch("http://localhost:3000/todos", { signal });
    },
  },
  {
    path: "/new",
    element: <NewTodo />,
  },
]);
