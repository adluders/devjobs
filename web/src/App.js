import { useContext } from "react";
import { Switch, Route } from "react-router";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        {
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/:slug" component={Detail} exact />
          </Switch>
        }
      </div>
    </div>
  );
};

export default App;
