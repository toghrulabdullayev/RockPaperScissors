import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <main className="w-[90vw]">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
