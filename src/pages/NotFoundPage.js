import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"

export default function NotFoundPage (){
    return(
        <div className="page_box">
            <div className="box">
                <h2>404</h2>
                <p>Страница не найдена</p>
                <p className="back"><Link to="/">Вернуться на главную</Link></p>
            </div>
        </div>
    );
}