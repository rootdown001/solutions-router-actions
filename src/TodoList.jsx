import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";
import { TodoItem } from "./TodoItem";
import { useEffect, useRef } from "react";

export function TodoList() {
  // receive info from useLoaderData()
  const {
    todos,
    searchParams: { query },
  } = useLoaderData();
  //get state
  const { state } = useNavigation();
  // create ref
  const queryRef = useRef();

  // useEffect to set ref = query when query changes
  useEffect(() => {
    queryRef.current.value = query;
  }, [query]);

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

      {/* use react router Form */}
      <Form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            {/* use ref for input value on screen */}
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>

      {/* show Loading if "loading" */}
      {state === "loading" ? (
        "Loading..."
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
