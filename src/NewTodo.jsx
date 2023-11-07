import { Form, Link, useActionData, useNavigation } from "react-router-dom";

export default function NewTodo() {
  // get data returned from action
  const errorMessage = useActionData();
  // get state or loader and action
  const { state } = useNavigation();
  // logic to be true if state is loading or submitting
  const isSubmitting = state === "submitting" || state === "loading";

  return (
    <div className="container">
      <h1 className="page-title">New Todo</h1>
      {/* use react router Form */}
      {/* change method to post */}
      <Form className="form" method="post">
        {/* show error message from useActionData() */}
        <div>{errorMessage}</div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div className="form-btn-row form-row">
          <Link to=".." className="btn btn-outline">
            Back
          </Link>
          {/* logic to disable button & change button name if isSubmitting is true */}
          {console.log("isSubmitting: ", isSubmitting)}
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "Loading" : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
}
