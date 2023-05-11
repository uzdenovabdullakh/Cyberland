import React from "react";
import PropTypes from "prop-types";
import './Modal.css'

function Registration (props){
    const {setPhone,setPassword,setRepeatPassword} = props
        return(
            <React.Fragment>
                            <div className="tabs__pane">
                            <h1>Регистрация</h1>
                            <div className="_regist">
                                <div className="regist_form">
                                    <input className="inputs" type="tel" required autoComplete="on" placeholder="Введите номер телефона" minLength="11" pattern="\d{11}" onChange={(e)=>setPhone(e.target.value)}></input>
                                    <input className="inputs" type="password" required placeholder="Придумайте пароль" minLength="8" maxLength="40" onChange={(e)=>setPassword(e.target.value)}></input>
                                    <input className="inputs" type="password" required placeholder="Повторите пароль" minLength="8" maxLength="40" onChange={(e)=>setRepeatPassword(e.target.value)}></input>
                                    <button className="submit_btn" type="submit">Зарегистрироваться</button>
                                </div>
                            </div>
                            </div>
            </React.Fragment>
        )
}


Registration.propTypes = {
    setPhone: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setRepeatPassword: PropTypes.func.isRequired,
}


export default Registration;