import React from "react";
import PropTypes from "prop-types";
import './Modal.css'

function SignIn (props){
        const {setPhone,setPassword} = props
        return(
            <React.Fragment>
                        <div className="tabs__pane tabs__pane_show">
                            <h1>Вход</h1>
                            <div className="_login">
                                <div className="login_form">
                                    <input className="inputs" type="tel" required autoComplete="on" placeholder="Введите номер телефона" minLength="11" pattern="\d{11}" onChange={(e)=>setPhone(e.target.value)}></input>
                                    <input className="inputs" type="password" required autoComplete="on" placeholder="Введите пароль" minLength="8" maxLength="40" onChange={(e)=>setPassword(e.target.value)}></input>
                                    <button className="submit_btn" type="submit">Войти</button>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        )
    //}
}


SignIn.propTypes = {
    setPhone: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
}

export default SignIn;
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