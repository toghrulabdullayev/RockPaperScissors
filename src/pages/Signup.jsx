import { useEffect } from "react";

import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../ui/Button";
import Input from "../ui/Input";
import { fetchSignup } from "../util/http";
import { authActions } from "../store/auth";

const Signup = () => {
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
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <Input
          type="password"
          id="conf-password"
          name="conf-password"
          placeholder="Confirm Password"
        />
        <Button className="mt-5 w-full">Sign up</Button>
        <p className="mt-2 text-header-outline">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-white">
            Log in
          </Link>
        </p>
      </Form>
    </div>
  );
};

export const action = async ({ request }) => {
  const data = await request.formData();
  const userData = Object.fromEntries(data.entries());
  const token = await fetchSignup({
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });
  return token;
};

export default Signup;
