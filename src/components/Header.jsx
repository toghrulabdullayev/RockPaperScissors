import { Link, useLocation } from "react-router-dom";

import Logo from "/src/assets/images/logo-bonus.svg";
import CountAnimation from "../ui/CountAnimation";

const Header = () => {
  const location = useLocation();

  return (
    <header className="mt-8 flex justify-between items-center h-fit w-[90vw] max-w-[720px] px-5 py-3 border-3 rounded-xl border-header-outline max-custom:py-2 max-custom:px-3">
      <Link to="/" className="mt-1">
        <img src={Logo} alt="logo" className="max-custom:w-18" />
      </Link>
      {location.pathname === "/cpu" || location.pathname === "/lobbyid" ? (
        <div className="bg-white px-10 py-2 rounded-lg max-custom:px-5">
          <h1 className="uppercase text-score-text tracking-widest text-center max-custom:text-xs">
            Score
          </h1>
          <CountAnimation />
        </div>
      ) : (
        <div className="text-white">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      )}
    </header>
  );
};

export default Header;
