import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import ContainerHeader from "../../ContainerHeader/ContainerHeader";
import NavbarAll from "../../Navbar/Navbar";
import Patricia from "../../BotPatricia/BotPatricia";
import "./Home.css";

export default function Home() {
  return (
    <div className="bots_container">
      <ContainerHeader />
      {/* <Link to="/Patricia">
        <Patricia />
      </Link> */}
    </div>
  );
}
