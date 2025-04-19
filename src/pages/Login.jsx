import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../ui/Button";
import Input from "../ui/Input";
import CheckBox from "../ui/Checkbox";
import { fetchLogin } from "../util/http";
import { authActions } from "../store/auth";
import { useEffect } from "react";

const Login = () => {
  const token = useActionData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(authActions.setToken(token));
      navigate("/online");
    }
  }, [token, dispatch, navigate]);

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <Form
        method="POST"
        className="flex flex-col items-center w-full max-w-100"
      >
        <Input type="email" id="email" name="email" placeholder="Email" />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <div className="mt-5 flex items-center justify-between w-full">
          <CheckBox />
          <Link to="/auth/reset" className="text-white">
            Forgot Password?
          </Link>
        </div>
        <Button className="mt-5 w-full">Log in</Button>
        <p className="mt-2 text-header-outline">
          Don&apos;t have an account yet?{" "}
          <Link to="/auth/signup" className="text-white">
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export const action = async ({ request }) => {
  const data = await request.formData();
  const userData = Object.fromEntries(data.entries());
  const token = await fetchLogin(userData);
  return token;
};

export default Login;
