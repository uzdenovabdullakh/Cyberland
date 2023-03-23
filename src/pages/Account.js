import React from "react";
import Header from "../components/Header";
import './Account.css'

export default function Account(){
    return (
        <div className="account__main">
           <Header />
           <div className="account__wrapper">
                <h1>
                    Объявления Ивана:
                </h1>
                <div className="ads__block">
                    <div className="cards">
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}