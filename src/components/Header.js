import React from "react";
import Hamburger from "./Hamburger";
import "./Header.css"



export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            <header>
            <nav>
                <ul>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Техподдержка</a></li>
                </ul>
            </nav>
            <Hamburger />
            </header>
        );
    }
}
