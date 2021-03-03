import React from "react";
import "./ChatbotList.css";
import { Link } from "react-router-dom";
import BotPatricia from "../BotPatricia/BotPatricia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const ChatbosList = () => {
  return (
    <>
      <div className="List__container">
        <section className="section-bots">
          <div className="bot__options">
            <div>
              <BotPatricia />
            </div>
            <div>
              {" "}
              <BotPatricia />
            </div>
            <div>
              {" "}
              <BotPatricia />
            </div>
            <div>
              {" "}
              <BotPatricia />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChatbosList;
