import React from "react";
import './Modal.css'

export default function Modal (){
        return(
            <React.Fragment>
                            <div className="tabs__pane">
                            <h1>Регистрация</h1>
                            <div className="_regist">
                                <form acrion="#" name="regist" id="regist_form" method="post">
                                    <input className="inputs" type="tel" required autoComplete="on" placeholder="Введите номер телефона" minLength="11" pattern="\d{11}"></input>
                                    <input className="inputs" type="password" required placeholder="Придумайте пароль" minLength="8" maxLength="40"></input>
                                    <input className="inputs" type="password" required placeholder="Повторите пароль" minLength="8" maxLength="40"></input>
                                    <button className="submit_btn" type="submit">Зарегистрироваться</button>
                                </form>
                            </div>
                            </div>
            </React.Fragment>
        )
}
