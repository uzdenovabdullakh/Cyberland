import React from "react";
import "./Help.css"

export default function Help(){
    return(
        <div className="help__main">
            <div className="wrapper__help">
                <h1>
                    О нас:
                </h1>
                <p>

                </p>
                <div className="social__block">
                    <p>
                        Связаться с нами:
                    </p>
                    <ul className="social-icons">
                        <li><a href="https://vk.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-vk"></i></a></li>
                        <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer"><i className="fa fa-telegram"></i></a></li>
                        <li><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );

}