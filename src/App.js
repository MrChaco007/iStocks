import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import Stocks from "./pages/stocks";
import Stock from "./pages/stock";
import Nav from "./components/nav.js";
import About from "./pages/about";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route
          path="/stock/:symbol"
          render={(routerProps) => <Stock {...routerProps} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
