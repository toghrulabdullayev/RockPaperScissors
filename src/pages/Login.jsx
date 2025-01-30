import { Form, Link } from "react-router-dom";

import Button from "../ui/Button";
import Input from "../ui/Input";
import CheckBox from "../ui/Checkbox";

const Login = () => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <Form className="flex flex-col items-center w-full max-w-100">
        <Input type="email" placeholder="Email or Username" />
        <Input type="password" placeholder="Password" />
        <div className="mt-5 flex items-center justify-between w-full">
          <CheckBox />
          <Link to="/auth/reset" className="text-white">
            Forgot Password?
          </Link>
        </div>
        <Button className="mt-5 w-full">Log in</Button>
        <p className="mt-2 text-header-outline">
          Don&apos;t have an account yet? <Link to="/auth/signup" className="text-white">Sign up</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
