import React from "react";
import "../RecurrinProblems/RecurrinProblems.css";
import RaspBerry from "../RecurrinProblems/RaspBerry";
import Network from "../RecurrinProblems/Network";
import Dialer from "../RecurrinProblems/Dialer";
import Browser from "../RecurrinProblems/Browser";
import Headseat from "../RecurrinProblems/Headseat";
const RecurrinProblems = () => (
  <>
    <div className="bots__list__err">
      <p>Problemas recorrentes</p>
      <ul className="list__err">
        <li>
          <RaspBerry />
        </li>
        <li>
          <Network />
        </li>
        <li>
          <Dialer />
        </li>
        <li>
          <Browser />
        </li>

        <li>
          <Headseat />
        </li>
      </ul>
    </div>
  </>
);

export default RecurrinProblems;
