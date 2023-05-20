import React, { useEffect, useState} from "react";
import { UserDataHook } from "../utils/hooks/UserDataHook";
import ResumeBtn from "./ResumeBtn";
import { Link } from "react-router-dom";
import {api} from '../utils/axios/interceptors'

export default function ExecutorDataLk (){
    const {email, technologies, experience, executorId, cv} = UserDataHook()
    const [clickResume, setclickResume] = useState(true)
    const [clickDel, setClickDel] = useState(false)

    const onLoadDropHandler = async (e) =>{
        e.preventDefault()
        if (clickResume){
            let selectedFile = e.target.files[0];
            const resume = new FormData()
            resume.append('cv',selectedFile)
            const resumeName = await api.put(`api/executors/${executorId}`,resume)
            sessionStorage.setItem('cv', resumeName.data.cv)
            addResumeLink(resumeName.data.cv)
            setclickResume(false)
            
        }
        /*else if (clickDel){
            //соотвественно удаление
            delResumeLink()
            /*setClickDel(false)
            setclickResume(true)/
        }*/
       
        //setResume(selectedFile)
    }
    
    const addResumeLink = (resumeName) => {
        let fileName = document.querySelector('.input-file-list')
        fileName.setAttribute('href', `http://localhost:5000${resumeName}`);
        fileName.style.visibility = 'visible'
        setclickResume(false)
        setClickDel(true)
    }

    const delResumeLink = () => {
        let fileName = document.querySelector('.input-file-list')
        fileName.style.visibility = 'hidden'
        sessionStorage.setItem('cv','null')
        console.log("del")
        setClickDel(true)
    }


    useEffect(()=>{ //заменить на componentdidmount сделатьклассовый компонент
        //тут запрос
       /* async function receiveResume() {
            const res = await api.get(`api/executors/${executorId}`,)
            return res.data.cv
        }
        receiveResume().then((result) => {
            addResumeLink(result)
        })
        .catch(console.error)*/
        if (cv!=='null'){
            console.log(cv)
            addResumeLink(cv)
        }
        if(clickDel) {

        }
        
        //
    },[])
   

    return (
            <ul className="about_user">
                <li>Технологии:<br /> <span> {technologies}</span></li>
                <li> Опыт работы: <br /> <span> {experience}</span></li> 
                <li> <span>{email}</span></li> 
                <li>
                    <form className="resume__form" onChange={onLoadDropHandler} encType="multipart/form-data">
                       {clickResume ? <ResumeBtn setclickResume={setclickResume} /> : <button className="delete__resume" onClick={delResumeLink}>Удалить резюме</button>}
                       <Link href="" className="input-file-list" target="blank">Ваше резюме</Link> 
                    </form>
                </li>
            </ul>

    );
}