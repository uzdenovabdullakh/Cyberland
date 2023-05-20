import React from "react";
import PropTypes from "prop-types";
import "./Modal.css"

function ChangePass(props){
    const {setCurrentPassword,setNewPassword,setRepeatNewPassword,setIsClose} = props
    return (
        <div className='modal-pass'>
            <div className="modal-body-pass">
                <span onClick={()=>(setIsClose(true))} role="button" className="close_modal">&times;</span>
                <h1>Смена пароля</h1>
                <div className="change_block">
                <input className="inputs inputs_change_pass" type="password" required placeholder="Введите ваш пароль" minLength="8" maxLength="40" onChange={(e)=>setCurrentPassword(e.target.value)}></input>
                    <input className="inputs inputs_change_pass" type="password" required placeholder="Введите новый пароль" minLength="8" maxLength="40" onChange={(e)=>setNewPassword(e.target.value)}></input>
                    <input className="inputs inputs_change_pass" type="password" required placeholder="Повторите новый пароль" minLength="8" maxLength="40" onChange={(e)=>setRepeatNewPassword(e.target.value)}></input>
                    <button className="submit_btn change_btn" type="submit">Подтвердить</button>
                </div>
            </div>
        </div>
    );
}

ChangePass.propTypes = {
    setCurrentPassword: PropTypes.func.isRequired,
    setNewPassword: PropTypes.func.isRequired,
    setRepeatNewPassword: PropTypes.func.isRequired,
    setIsClose: PropTypes.func.isRequired,
}


export default ChangePass;