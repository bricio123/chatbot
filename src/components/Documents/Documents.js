import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../Documents/Documents.css";
import { Link } from "react-router-dom";
import { faInfo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Documents = () => {
  return (
    <div className="Documents_container">
  
      <div className="Documentes__itens__save">
        <span>Arquivos</span>
        <button className='trash__icon__button'>
          <FontAwesomeIcon icon={faInfo}/>
        </button>
      </div>
      <div className='Container__info'>
        
      </div>
    </div>
  );
};

export default Documents;
