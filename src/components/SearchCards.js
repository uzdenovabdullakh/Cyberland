import React from "react";
import "../pages/Cards.css"
import { Link } from "react-router-dom";
import { UserDataHook } from "../utils/hooks/UserDataHook";
import {api} from '../utils/axios/interceptors'

function  SearchCards(props) {
    const {executorId} = UserDataHook()
    const {customerName, taskId,title, description,cost,imgSrc, category,customerTaskId} = props
   // sessionStorage.setItem('forCustomerAcc',customerTaskId)
   
    sessionStorage.setItem('forCustomerAcc',customerTaskId)
    

    const handleCall = async () => {
        //сделать запрос на request
        const requestData = {
            executorId: executorId,
            taskId: taskId,
        }
        const req = await api.post('api/requests/', requestData)
        console.log(req)
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
                                    <span><Link to='/id='>{customerName}</Link></span>
                                </div>
                        </div>
                        {executorId? <ul className="card__buttons"><button className="call" onClick={handleCall}>Откликнуться</button></ul>:null}
            </div>
        </div>
    );
}



export default SearchCards;