import { createBrowserRouter, redirect } from "react-router-dom";
import { TodoList } from "./TodoList";
import NewTodo from "./NewTodo";

export const router = createBrowserRouter([
  {
    index: true,
    element: <TodoList />,

    // using async / await bc returning object with 2 items, and fetch result is one
    loader: async ({ request: { signal, url } }) => {
      const searchParams = new URL(url).searchParams;
      const query = searchParams.get("query") || "";

      return {
        // return object with searchParams & fetch result
        searchParams: { query },
        todos: await fetch(`http://localhost:3000/todos?q=${query}`, {
          signal,
        }).then((res) => res.json()),
      };
    },
  },
  {
    path: "/new",
    element: <NewTodo />,
    //  create action
    //  it is an async request
    action: async ({ request }) => {
      // retrieve formData from request
      const formData = await request.formData();
      // retrieve input value (under key of "title")
      const title = formData.get("title");

      // validate (when returned, will be picked up by useActionData)
      if (title === "") {
        return "Title is required";
      }
      // create await fetch
      //pass object with our POST info
      const todo = await fetch("http://localhost:3000/todos", {
        method: "POST",
        signal: request.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
        // parse the fetch response
      }).then((res) => res.json());

      // return a redirect
      return redirect("/");
    },
  },
]);
