import React from "react";
import "./GlobalStyles.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Patricia from "./components/BotOne/BotOne";
import Purpose from './components/Pages/Purpose/Purpose';
import Meetbot from './components/Pages/Meetboots/Meetboots';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Dashboard"component={Dashboard} />
      <Route path="/Patricia" component={Patricia} />
      <Route path="/Purpose" component={Purpose} />
      <Route path="/Meetbot" component={Meetbot} />
    </BrowserRouter>
  );
}

export default App;
