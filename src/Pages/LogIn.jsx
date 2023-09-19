import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components";

const LogIn = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card bg-base-100 p-8 shadow-lg flex flex-col gap-y-4 w-96"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          label="email"
          type="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          defaultValue="djdjweh34"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="capitalize btn btn-secondary">guest user</button>
        <p className="text-center">
          Not a user yet?{" "}
          <Link
            to="/register"
            className="capitalize ml-2 link link-hover link-primary"
          >
            register
          </Link>{" "}
        </p>
      </Form>
    </section>
  );
};
export default LogIn;
