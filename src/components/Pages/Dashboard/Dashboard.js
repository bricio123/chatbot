import React from "react";
import "../Dashboard/Dashboard.css";
import Documents from "../../Documents/Documents";
import "../../BotPatricia/BotPatricia";
import BotPatricia from "../../BotOne/BotOne";
import ChatbotList from "../../ChatbotList/ChatbotList";
import { Link } from "react-router-dom";
import NavbarAll from "../../Navbar/Navbar";


const Dashboard = () => {
  return (
    <>
      <div className="Container__dashboard">
        <ChatbotList />
        <BotPatricia />
        <Documents />
      </div>
    </>
  );
};

export default Dashboard;
