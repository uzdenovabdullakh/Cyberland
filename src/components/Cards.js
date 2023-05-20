import React, { useState } from "react";
import "../pages/Cards.css"
import { Link } from "react-router-dom";
import {api} from '../utils/axios/interceptors'
import { UserDataHook } from "../utils/hooks/UserDataHook";
import useForceUpdate from 'use-force-update';
import RequestExecutors from "./Modal/RequestExecutors";



function Cards(props) {
    const {executorId, customerId} = UserDataHook()
    const {customerName, taskId,title, description,cost,imgSrc, category,customerTaskId,request} = props
    const [name,setName] = useState('')
    const [modalClick,setModalClick] = useState(false)
    const forceUpdate = useForceUpdate();
   // console.log(typeof customerName === 'undefined')

   
   sessionStorage.setItem('forCustomerAcc',customerTaskId)

    api.get(`http://localhost:5000/api/customers/${customerTaskId}`).then((res)=>{
        setName(`${res.data.user.name} ${res.data.user.secondName}`)
    })
    
    sessionStorage.setItem('forCustomerAcc',customerTaskId)
    const handleDelete = () => {
        //e.preventDefault()
        sessionStorage.setItem('isClick', true)
        sessionStorage.setItem('taskId', taskId)
        forceUpdate();
        //api.delete(`api/tasks/${taskId}`);
    }

    const handleRecall = () => {
        //console.log(request)
        try {
            api.delete(`api/requests/${request}`)
        }catch(e){
            console.log(e)
        }
    }

    const handleRequestExecutors = async () =>{
        try{
            const data = await api.get(`http://localhost:5000/api/customers/${sessionStorage.getItem('customerId')}`)

         
           
            console.log(data.data)
            console.log(data.data.tasks[0].requests[0].executor.id)
            console.log(data.data.tasks[0].requests[0].executor.user.name)

            console.log(data.data.tasks[0].requests[0].executor.user.secondName)

            const a = data.data.tasks[0].requests[0].executor.user.name + ' ' + data.data.tasks[0].requests[0].executor.user.secondName
            const all = [...data.data.tasks]
            let all2 = all.map(item=>{
                return item.requests
            })
            let all3 = [...all2[0].map(item=>{
                return item.executor
            })]

            console.log(all)
            console.log(all2)
            console.log(all3)
            //console.log(b[0])
            sessionStorage.setItem('execName',a)
            sessionStorage.setItem('forExecutorAcc',all3[0].id)
            setModalClick(true)
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <div>
                <div className="card">
                        <div className="card__top">
                            <Link to="/*" className="card__image">
                                <img src={`${imgSrc}`} alt=""/></Link>
                        </div>
                        <div className="card__bottom">
                                <div className="card__prices">
                                    <div className="card__price card__price--discount">{cost}</div>
                                </div>
                                <Link to={taskId} className="card__title">
                                    {title}  {/*taskId */}
                                </Link>
                                <div className="card__description">
                                    {description}
                                </div>
                                <div className="card__category">
                                    {category}
                                </div>
                                <div className="user_link">
                                    <span><Link to='/id='>{typeof customerName === 'undefined' ? name :customerName}</Link></span>
                                </div>
                        </div>
                        {customerId? <ul className="card__buttons"><button className="delete__card" onClick={handleDelete}>Удалить</button><button className="card__requests" onClick={handleRequestExecutors}>Отклики</button></ul>:null}
                        {executorId? <ul className="card__buttons"><button className="recall" onClick={handleRecall}>Отозвать</button></ul>:null}
            </div>
            {modalClick?<RequestExecutors setIsClose={setModalClick} name={ sessionStorage.getItem('execName')}/>:null}
        </div>
    );
}



export default Cards;