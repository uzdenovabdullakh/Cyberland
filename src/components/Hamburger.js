import React from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css"


export default function Hamburger(){
    return(
      <div className="navbar">
        <div className="nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
              <div className="menu-items">
                <li><Link to="/signinup">Вход\Регистрация</Link></li>
              </div>
           
        </div>
      </div>
    );
}