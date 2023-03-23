import React from "react";
//import { Link } from "react-router-dom";
import "./Avatar.css"

export default function Avatar(){
    return(
      <div className="avatar__main">
        <div className="avatar-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="avatar">
            </div>  
              <div className="avatar__menu_items">
                {/*<li><Link to="/signinup">Вход\Регистрация</Link></li>*/}
              </div>
        </div>
      </div>
    );
}