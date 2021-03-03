import React from "react";
import "../Dashboard/Dashboard.css";
import Documents from "../../Documents/Documents";
import "../../BotPatricia/BotPatricia";
import BotPatricia from "../../BotOne/BotOne";
import Services from '../../Services/Services';
import ChatbotList from "../../ChatbotList/ChatbotList";
import { Link } from "react-router-dom";


const Dashboard = () => {


  return (
    <>
      <div className="Container__dashboard">
        <ChatbotList />
        <Services/>
        <BotPatricia />
        <Documents />
      </div>
    </>
  );
};

export default Dashboard;
