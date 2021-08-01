import MyCard from "./Components/Card/MyCard";
import Counter from "./Components/Counter";
import Navbar from "./Layout/Header/Navbar/Navbar";
import "antd/dist/antd.css";
import MyForm from "./Components/Form/MyForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AddNote from "./Pages/AddNote";
import ShowNote from "./Pages/ShowNote";

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add-note">
          <AddNote />
        </Route>
        <Route path="/note">
          <ShowNote />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
