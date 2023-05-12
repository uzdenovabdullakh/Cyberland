import React from "react";
import PropTypes from "prop-types";
import './Modal.css'

function Registration (props){
    const {setSecondName,setName,setPhone,setEmail,setPassword,setRepeatPassword} = props
        return(
            <React.Fragment>
                            <div className="tabs__pane">
                            <h1>Регистрация</h1>
                            <div className="_regist">
                                <div className="regist_form">
                                    <input className="inputs" type="text" required placeholder="Введите фамилию" onChange={(e)=>setSecondName(e.target.value)}></input>
                                    <input className="inputs" type="text" required placeholder="Введите имя" onChange={(e)=>setName(e.target.value)}></input>
                                    <input className="inputs" type="email" required autoComplete="on" placeholder="Введите e-mail" minLength="6" onChange={(e)=>setEmail(e.target.value)}></input>
                                    <input className="inputs" type="tel" required autoComplete="on" placeholder="Введите номер телефона" minLength="11" pattern="\d{11}" onChange={(e)=>setPhone(e.target.value)}></input>
                                    <input className="inputs" type="password" required placeholder="Придумайте пароль" minLength="8" maxLength="40" onChange={(e)=>setPassword(e.target.value)}></input>
                                    <input className="inputs" type="password" required placeholder="Повторите пароль" minLength="8" maxLength="40" onChange={(e)=>setRepeatPassword(e.target.value)}></input>
                                    
                                </div>
                                <button className="submit_btn" type="submit">Зарегистрироваться</button>
                            </div>
                            </div>
            </React.Fragment>
        )
}


Registration.propTypes = {
    setSecondName: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPhone: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setRepeatPassword: PropTypes.func.isRequired,
}


export default Registration;