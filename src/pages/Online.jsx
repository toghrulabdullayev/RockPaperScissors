// import { Suspense } from "react";

// import { useQuery } from "@tanstack/react-query";
// import { Await, useLoaderData } from "react-router-dom";

// import { fetchOnlineStatus } from "../util/http";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Online = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/login");
    }
  }, [isAuth, navigate]);

  return <h1>online</h1>;
};

export default Online;
