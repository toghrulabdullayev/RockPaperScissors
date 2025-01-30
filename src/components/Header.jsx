import { Link, NavLink } from "react-router-dom";

import Logo from "/src/assets/images/logo-bonus.svg";
import CountAnimation from "../ui/CountAnimation";

const Header = ({ inGame }) => {
  return (
    <header
      className={`mt-8 flex justify-between items-center h-fit w-[90vw] px-5 py-3 border-3 rounded-xl border-header-outline max-custom:py-2 max-custom:px-3 ${
        inGame ? "max-w-[720px]" : ""
      }`}
    >
      <Link to="/" className="mt-1">
        <img src={Logo} alt="logo" className="max-custom:w-18" />
      </Link>
      {inGame ? (
        <div className="bg-white px-10 py-2 rounded-lg max-custom:px-5">
          <h1 className="uppercase text-score-text tracking-widest text-center max-custom:text-xs">
            Score
          </h1>
          <CountAnimation />
        </div>
      ) : (
        <div className="flex gap-5">
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-header-outline"
            }
          >
            Log in
          </NavLink>
          <NavLink
            to="/auth/signup"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-header-outline"
            }
          >
            Sign up
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
