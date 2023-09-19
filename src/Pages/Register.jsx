import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form className="card flex flex-col gap-y-4 w-96 shadow-lg p-8 bg-base-100">
        <h4 className="text-center font-bold text-3xl">Register</h4>
        <FormInput label="username" type="text" name="username"/>
        <FormInput label="email" type="email" name="email"/>
        <FormInput label="password" type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register"/>
        </div>
        <p className="text-center">Already a member? <Link to="/login" className="link link-hover link-primary">Login in</Link> </p>
      </Form>
    </section>
  );
};
export default Register;
