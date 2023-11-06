import { Link, useLoaderData } from "react-router-dom";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title mb-2">
        Todos
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>

      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" />
          </div>
          <button className="btn">Search</button>
        </div>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
