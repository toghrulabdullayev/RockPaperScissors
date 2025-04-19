// import { Suspense } from "react";

// import { useQuery } from "@tanstack/react-query";
// import { Await, useLoaderData } from "react-router-dom";

// import { fetchOnlineStatus } from "../util/http";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRefreshToken } from "../util/http";

const Online = () => {
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fechfech = async () => {
      const tok = await fetchRefreshToken();
      console.log(tok);
    };

    fechfech();
  }, []);

  return <h1>{token}</h1>;
};

export default Online;
