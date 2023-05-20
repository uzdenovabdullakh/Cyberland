import React from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css"
import { UserDataHook } from "../utils/hooks/UserDataHook";

export default function Hamburger(){
  //если пользователь авторизован то /account иначе /signinup и с
  //если пользователь авторизован то на страницу размещения объявлений иначе /siginup
  const {customerId} = UserDataHook()
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
                <li><Link to="/account">Личный кабинет</Link></li>
                <li><Link to="/help">Помощь</Link></li>
                {customerId ? <li><Link to="/addtask">Разместить объявление</Link></li>: null}
              </div>
        </div>
      </div>
    );
}