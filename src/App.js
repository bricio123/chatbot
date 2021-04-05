import React from "react";
import "./GlobalStyles.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Patricia from "./components/BotOne/BotOne";
import Purpose from "./components/Pages/Purpose/Purpose";
import Meetbot from "./components/Pages/Meetboots/Meetboots";

import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

firebase.initializeApp({
  apiKey: "AIzaSyAuoRdexRNLcDw0E7n8Gdnr7ZRhFDJ05Nk",
  authDomain: "chatbot-8c00d.firebaseapp.com",
  projectId: "chatbot-8c00d",
  storageBucket: "chatbot-8c00d.appspot.com",
  messagingSenderId: "289050771352",
  appId: "1:289050771352:web:f98061b6f861d36c7fb5ed",
  measurementId: "G-VW9EX01R4P",
});
const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Patricia" component={Patricia} />
      <Route path="/Purpose" component={Purpose} />
      <Route path="/Meetbot" component={Meetbot} />
    </BrowserRouter>
  );
}

export default App;
