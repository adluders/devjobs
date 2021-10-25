import { Link } from "react-router-dom";
import Logo from "../static/logo.svg";
import Sun from "../static/icon-sun.svg";
import Moon from "../static/icon-moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, updateTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="devjobs logo" />
        </Link>

        <div className="theme-switch">
          <img src={Sun} alt="light mode" />

          <div className="toggler" onClick={() => updateTheme()}>
            <div className={`toggle ${darkMode ? "dark" : "light"}`}></div>
          </div>

          <img src={Moon} alt="dark mode" />
        </div>
      </div>
    </header>
  );
};

export default Header;
