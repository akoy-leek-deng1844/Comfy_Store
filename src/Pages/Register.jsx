import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components";
import { customUrl } from "../Utils";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
 const formData = await request.formData();
 const data = Object.fromEntries(formData);
  try {
    const response = await customUrl.post("/auth/local/register", data);
    toast.success('accounted created successfully');
    return redirect('/login'); 
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
}
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card flex flex-col gap-y-4 w-96 shadow-lg p-8 bg-base-100"
      >
        <h4 className="text-center font-bold text-3xl">Register</h4>
        <FormInput
          label="username"
          type="text"
          name="username"
        />
        <FormInput
          label="email"
          type="email"
          name="email"
        />
        <FormInput
          label="password"
          type="password"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?{" "}
          <Link to="/login" className="link link-hover link-primary">
            Login in
          </Link>{" "}
        </p>
      </Form>
    </section>
  );
};
export default Register;
