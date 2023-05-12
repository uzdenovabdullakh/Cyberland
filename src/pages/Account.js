import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import './Account.css'
import ChangePass from "../components/Modal/ChangePass";

export default function Account(){
    const [isClicked,setClicked]=useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')
    const [isClose, setIsClose] = useState(true)
    

    const handleClick = () =>{
        setClicked(true)
        setIsClose(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            newPassword,
        }
        setClicked(false)
        
        //const newUser = await instance.post('/api/auth/registration',userData)
    }

    useEffect(() => {
        if(isClose) {
           setClicked(false)
        }
      // console.log(isClose)
    });

    return (
        <div className="account__main">
           <Header />
           <div className="pass_button">
                <button className="call_button" onClick={handleClick}>Сменить пароль</button>
            </div>
            <form onSubmit={handleSubmit}>
                {isClicked ? <ChangePass setNewPassword={setNewPassword} setRepeatNewPassword={setRepeatNewPassword} setIsClose={setIsClose} /> : null}
            </form>
            
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