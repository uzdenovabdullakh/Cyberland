import React from "react";
import './Modal.css'

export default function Modal (){
        return(
            <React.Fragment>
                        <div className="tabs__pane tabs__pane_show">
                            <h1>Вход</h1>
                            <div className="_login">
                                <form acrion="#" name="login" id="login_form" method="post">
                                    <input className="inputs" type="tel" required autoComplete="on" placeholder="Введите номер телефона" minLength="11" pattern="\d{11}"></input>
                                    <input className="inputs" type="password" required autoComplete="on" placeholder="Введите пароль" minLength="8" maxLength="40"></input>
                                    <button className="submit_btn" type="submit">Войти</button>
                                </form>
                            </div>
                        </div>
            </React.Fragment>
        )
    //}
}

/*

<div class="registration">
            <h1>Регистрация</h1>
            <div class="_regist">
                <form acrion="#" name="regist">
                    <input type="tel" required placeholder="Введите номер телефона"></input>
                    <input type="password" required placeholder="Придумайте пароль" maxlength="40"></input>
                    <input type="password" required placeholder="Повторите пароль" maxlength="40"></input>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>

*/