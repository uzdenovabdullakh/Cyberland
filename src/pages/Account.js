import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import './Account.css'
import ChangePass from "../components/Modal/ChangePass";
import { AppErrors } from "../utils/errors";
import "./Cards.css"
import { useDispatch} from "react-redux";
import {api} from "../utils/axios/interceptors";
import {removeUser} from "../utils/store/slices/userSlice"
import { useNavigate } from "react-router-dom";
import {CustomerAcc} from "../components/CustomerAcc";
import ExecutorAcc from "../components/ExecutorAcc";



export default function Account(){
    const [isClicked,setClicked]=useState(false)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')
    const [isClose, setIsClose] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    sessionStorage.setItem('isDone',false)
    const handleClick = () =>{
        setClicked(true)
        setIsClose(false)
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newPassword===repeatNewPassword){
            try{
                const userNewPassword = {
                    currentPassword,
                    password: newPassword,
                }
                await api.patch('/api/auth/password',userNewPassword)
                setClicked(false)
            }catch(e){
                console.log(e.message)
                return e
            }
        }
        else {
            throw new Error(AppErrors.PasswordDoNotMatch)
        }
        
    }

    useEffect(() => {
        if(isClose) {
           setClicked(false)
        }
    });

    const handleLogout =  () => {
        dispatch(removeUser())
        if (sessionStorage.getItem('customerId')){
            sessionStorage.removeItem('customerId')
            sessionStorage.removeItem('employment')
            sessionStorage.removeItem('taskCount')
        }
        if (sessionStorage.getItem('executorId')){
            sessionStorage.removeItem('executorId')
            sessionStorage.removeItem('technologies')
            sessionStorage.removeItem('experience')
            sessionStorage.removeItem('cv')
        }
        navigate('/')
    }

    const handleDeleteUser = async () => {
        await api.delete(`http://localhost:5000/api/users/${sessionStorage.getItem('id')}`, )
        dispatch(removeUser())
        if (sessionStorage.getItem('customerId')){
            sessionStorage.removeItem('customerId')
            sessionStorage.removeItem('employment')
            sessionStorage.removeItem('taskCount')
        }
        if (sessionStorage.getItem('executorId')){
            sessionStorage.removeItem('executorId')
            sessionStorage.removeItem('technologies')
            sessionStorage.removeItem('experience')
            sessionStorage.removeItem('cv')
        }
        navigate('/')
    }

    return (
        <div className="account__main">
           <Header/>
           <div className="pass_button">
                <button className="pass_change_button" onClick={handleClick}>Сменить пароль</button>
                <button className="logout_button" onClick={handleLogout}>Выйти</button>
                <button className="delete_button" onClick={handleDeleteUser}>Удалить аккаунт</button>
            </div>
            <form onSubmit={handleSubmit}>
                {isClicked ? <ChangePass setCurrentPassword={setCurrentPassword} setNewPassword={setNewPassword} setRepeatNewPassword={setRepeatNewPassword} setIsClose={setIsClose} /> : null}
            </form>
            {sessionStorage.getItem('customerId') ? <CustomerAcc /> : <ExecutorAcc />}
           
        </div>
    );
}