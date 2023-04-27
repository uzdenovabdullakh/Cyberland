import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Arrow from "./Arrow"
import "./Header.css"


export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    //при нажатии на аккаунт должен перенаправить в лк если авторизован, если нет то н страницу авторизации\регистрации
    render(){
        return(
            <header>
            <nav>
                <ul>
                    <li><Link to="/"><Arrow /></Link></li>
                    <li><Link to="/account"><span>Иванов Иван</span><Avatar /></Link>
                    <div className="acc_button">
                        <button className="call_button">Позвонить</button>
                        <button className="text_button">Написать</button>
                    </div>
                    </li>
                </ul>
            </nav>
            </header>
        );
    }
}
