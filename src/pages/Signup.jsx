import { Form, Link } from "react-router-dom";

import Button from "../ui/Button";
import Input from "../ui/Input";

const Signup = () => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <Form className="flex flex-col items-center w-full max-w-100">
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
          Already have an account? <Link to="/auth/login" className="text-white">Log in</Link>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
