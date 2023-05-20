import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Arrow from "./Arrow"
import "./Header.css"
//import { useSelector } from "react-redux"
import { UserDataHook } from "../utils/hooks/UserDataHook";
import ExecutorDataLk from "./ExecutorDataLk";
import CustomerDataLk from "./CustomerDataLk";

function Header () {
        /*если executor то его поля а если customer то соотвественно его поля */
        //const {email,name,secondName, technologies, experience, employment} = useSelector((state)=>state.user)
        const {customerId,name,secondName} = UserDataHook()
        return(
            <header>
                <nav>
                    <div className="arrow_block"><Link to="/"><Arrow /></Link></div>
                        <div className="account_block">
                            <div className="account__block">
                                <ul className="account_avatar">
                                    <Link to="/account"><span>{secondName} {name}</span><Avatar /></Link> 
                                </ul>
                                {customerId ? <CustomerDataLk /> :  <ExecutorDataLk />}
                            </div>
                        </div>
                    </nav>
            </header>
        );
}


export default Header;