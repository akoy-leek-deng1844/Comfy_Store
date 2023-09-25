import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components";
import { customUrl } from "../Utils";
import { loginIn } from "../Features/user/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customUrl.post('/auth/local', data);
      store.dispatch(loginIn(response.data));
      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please check your login details again';

      toast.error(errorMessage);
      return null;
    }
  };

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const loginGuestUser = async () => {
    try {
      const response = await customUrl.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      
      dispatch(loginIn(response.data))
      navigate("/");
    } catch (error) {
      
    }
  }
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
          
        />
        <FormInput
          label="password"
          type="password"
          name="password"
         
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="capitalize btn btn-secondary" onClick={loginGuestUser}>guest user</button>
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
