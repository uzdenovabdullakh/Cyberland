import React,{useEffect, useState} from "react";
import './Account.css'
import "./Cards.css"
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import Arrow from "../components/Arrow"
import SearchCards from "../components/SearchCards";
import {api} from '../utils/axios/interceptors'
import './UserAcc.css'

export default function UserExecAcc(){
    const [cards,setCards] = useState([])


    /*получить по id имя и фамилию, емайл и данные кастомера или исполнителя соответсенно */
    
    useEffect(()=>{
        const handleExecutorsCard = async () =>{
            if(sessionStorage.getItem('forExecutorAcc')){
                try {
                    const ex = await api.get(`api/executors/${sessionStorage.getItem('forExecutorAcc')}`)
                    console.log(ex.data)
                    const fullName = ex.data.user.name+' '+ex.data.user.secondName
                    const exp = ex.data.experience;
                    const tech = ex.data.technologies;
                    const email = ex.data.user.email;
                    const resumeName = ex.data.cv
                    sessionStorage.setItem('execExp', exp)
                    sessionStorage.setItem('execEmail', email)
                    sessionStorage.setItem('execTech', tech)
                    sessionStorage.setItem('execName', fullName) 
                    
                    let fileName = document.querySelector('.exec__resume')
                    fileName.setAttribute('href', `http://localhost:5000${resumeName}`);
                    
                
                    sessionStorage.removeItem('forExecutorAcc')
                   
            }
            catch(e){
                console.log(e)
                sessionStorage.removeItem('forExecutorAcc')
            }
        }
     }
        
    
     
        handleExecutorsCard()

    })
    
    return (
        <div className="account__main__ex">
           <div>
           <header>
                <nav>
                    <div className="arrow_block"><Link to="/"><Arrow /></Link></div>
                        <div className="account_block">
                            <div className="account__block">
                                <ul className="account_avatar">
                                    <Link to=""><span>{sessionStorage.getItem('execName')}</span><Avatar /></Link> 
                                     <ul className="about_user__exec">
                                        <li>Технологии:<br /> <span> {sessionStorage.getItem('execTech')}</span></li>
                                        <li> Опыт работы: <br /> <span> {sessionStorage.getItem('execExp')}</span></li> 
                                        <li> <span>{sessionStorage.getItem('execEmail')}</span></li> 
                                        <Link href="" className="exec__resume" target="blank">Резюме</Link> 
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </header>
           </div>
           <div className="acc_button exec_button">
                 <button className="call_button">Позвонить</button>
                 <button className="text_button">Написать</button>
            </div>
           
        </div>
    );
}