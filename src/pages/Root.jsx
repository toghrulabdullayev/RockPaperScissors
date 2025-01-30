import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <Header
        inGame={
          location.pathname === "/cpu" || location.pathname === "/lobbyid"
        }
      />
      <main className="w-[90vw]">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
