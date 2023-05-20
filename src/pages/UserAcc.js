import React,{useEffect, useState} from "react";
import './Account.css'
import "./Cards.css"
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import Arrow from "../components/Arrow"
import SearchCards from "../components/SearchCards";
import {api} from '../utils/axios/interceptors'
import './UserAcc.css'

export default function Account(){
    const [cards,setCards] = useState([])


    /*получить по id имя и фамилию, емайл и данные кастомера или исполнителя соответсенно */
    
    useEffect(()=>{
        const handleCard = async () =>{
            if (sessionStorage.getItem('forCustomerAcc')){
                try {
                    const task = await api.get(`api/customers/${sessionStorage.getItem('forCustomerAcc')}`)
                    const fullName = task.data.user.name+' '+task.data.user.secondName
                    const emp= task.data.employment;
                    const email = task.data.user.email;
                    sessionStorage.setItem('custEmp', emp)
                    sessionStorage.setItem('custEmail', email)
                    sessionStorage.setItem('custName', fullName)    
                    const tasks = task.data.tasks
                    const cards = tasks.map((item)=>{
                        return (
                            <SearchCards key={item.id} customerName={fullName} taskId={item.id} title={item.name} description={item.description} cost={item.cost} imgSrc={item.img} category={item.type}></SearchCards>
                        );
                    })
                    console.log(cards)
                    setCards([...cards])
                    sessionStorage.removeItem('forCustomerAcc')
            }
            catch(e){
                console.log(e)
                sessionStorage.removeItem('forCustomerAcc')
            }
        }
        else if(sessionStorage.getItem('forExecutorAcc')){
            try {
                const ex = await api.get(`api/executors/${sessionStorage.getItem('forExecutorAcc')}`)
                console.log(ex.data)
                sessionStorage.removeItem('forExecutorAcc')
            }catch(e){
                console.log(e)
                sessionStorage.removeItem('forExecutorAcc')
            }
            
        }
     }
        
    
     
        handleCard()

    })
    
    return (
        <div className="account__main">
           <div>
           <header>
                <nav>
                    <div className="arrow_block"><Link to="/"><Arrow /></Link></div>
                        <div className="account_block">
                            <div className="account__block">
                                <ul className="account_avatar">
                                    <Link to=""><span>{sessionStorage.getItem('custName')}</span><Avatar /></Link> 
                                    { sessionStorage.getItem('custName') ?  <ul className="about_user__">
                                    <li>Сфера деятельности:<br /> <span> {sessionStorage.getItem('custEmp')}</span></li> 
                                     <li><span> {sessionStorage.getItem('custEmail')}</span></li>
                                    </ul>: null}
                                </ul>
                            </div>
                        </div>
                    </nav>
            </header>
           </div>
           <div className="acc_button">
                 <button className="call_button">Позвонить</button>
                 <button className="text_button">Написать</button>
            </div>
            { sessionStorage.getItem('custName') ?
            <div className="account__wrapper">
                <h1>Объявления {sessionStorage.getItem('custName')}:</h1>
                <div className="ads__block">
                    <div className="cards">
                        {cards}   
                    </div>
                </div>
            </div>
            :null}
            {/*если это кастомер показать его объявления, если нет то пусто */}
           
        </div>
    );
}