import React from "react";

import "../ContainerHeader/ContainerHeader.css";
import { Link } from "react-router-dom";
export default function ContainerHeader() {
  return (
    <div className="Container-jumbotron">
      <h1>ChatBot</h1>
      <div className="text_container">
        <p>Nossos bots tiram suas dúvidas com perguntas rápidas e resumida </p>
        <sectio className="buttons-group">
          <Link to="">
            <button>conhecer</button>
          </Link>
          <Link to="/Dashboard">
            <button>começar conversar</button>
          </Link>
        </sectio>
      </div>
      <small>v. 0.0.1</small>
    </div>
  );
}
