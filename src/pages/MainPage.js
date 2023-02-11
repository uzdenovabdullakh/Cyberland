import React from "react";
import Header from "../components/Header";
import "./MainPage.css"

export default function MainPage(){
        return(
            <main className="main_page">
                <Header />
                <div className="wrapper">
                    <div className="container">
                        <h1>
                            <span>Найти</span> <br /> место в IT
                        </h1>
                        <form id="search_form" action="#" method="get">
                            <input name="search_input" type="text" id="search_input" required placeholder="..." maxLength="40"/>
                            <div className="icon"></div>
                            <button className="category_filter"></button>
                            <button type="submit" id="search_button">Поиск</button>
                        </form>
                    </div>
                </div>
            </main>
        );
}