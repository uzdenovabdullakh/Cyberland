import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Arrow from "./Arrow"
import "./Header.css"


function Header () {
        
        return(
            <header>
            <nav>
            <div className="arrow_block"><Link to="/"><Arrow /></Link></div>
                <div className="account_block">
                    <div className="account__block">
                        <ul className="account_avatar">
                            <Link to="/account"><span>Иванов Иван</span><Avatar /></Link> 
                            <li className="town"><span> г. Таганрог</span></li>
                        </ul>
                        <ul className="about_user">
                            <li className="special"> Специализация: <br /> <span>Backend</span></li>
                            <li className="prog_langs">Языки программирования:<br /> <span> node.js, Python</span></li>
                            <li className="account_email">ivanovivan@mail.ru</li>
                        </ul>
                        {/* если авторизован появляются надписи и кнопки, запрос на сервер за данными*/}
                       {/* <div className="acc_button">
                            <button className="call_button">Позвонить</button>
                            <button className="text_button">Написать</button>
                        </div>*/} 
                        
                    </div>
                </div>
            </nav>
            </header>
        );
}


export default Header;