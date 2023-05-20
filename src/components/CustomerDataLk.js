import React from "react";
import { UserDataHook } from "../utils/hooks/UserDataHook";

export default function ExecutorDataLk (){
    const {email, employment} = UserDataHook()
    return (
                <ul className="about_user">
                <li>Сфера деятельности:<br /> <span> {employment}</span></li> 
                <li><span> {email}</span></li>
                </ul>

    );
}