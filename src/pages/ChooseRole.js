import React from "react";
import ExecutorForm from "../components/Modal/ExecutorForm";
import CustomerForm from "../components/Modal/CustomerForm";
import './ChooseRole.css'
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import {setExecutor, setCustomer} from '../utils/store/slices/userSlice'
import {api} from "../utils/axios/interceptors"



const container = {
    height: '100vh',
    background:'#85B1F3',
    color:'#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    fontFamily: 'Montserrat',
}
const text = {
    fontWeight: 700,
    fontSize: '5vh',
    marginTop: '50px',
    lineHeight: 1,
}




const buttonBlock = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

export default function ChooseRole(){
    const [isCustomer,setClickedCustomer]=React.useState(false)
    const [isExecutor,setClickedExecutor]=React.useState(false)
    const navigate = useNavigate()
    //const dispatch = useDispatch()

    const handleCustomer = (e) =>{
        if (isCustomer){
            setClickedCustomer(false)
        }
        else {
            setClickedCustomer(true)
            setClickedExecutor(false)
        }
    }
    const handleExecutor = () =>{
        if (isExecutor){
            setClickedExecutor(false)
        }
        else {
            setClickedExecutor(true)
            setClickedCustomer(false)
        }
        
    }

    const [experience, setExeperience] = React.useState('')//коллбэк функции
    const [technologies, setTechnologies] = React.useState('')
    const [employment, setEmployment] = React.useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        //регистрация
        if (isCustomer){
            try {
                const userId = sessionStorage.getItem('id')
                const userCustomerData = {
                    userId,
                    employment,
                }
                const userCustomer = await api.post('/api/customers/', userCustomerData)
                sessionStorage.setItem('customerId',userCustomer.data.id)
                sessionStorage.setItem('employment',userCustomerData.employment)
                navigate("/signinup")
                /*await dispatch(setCustomer({
                    employment:  userCustomerData.employment,
                }
                ))*/
            } catch(e){
                console.log(e.message)
                return e
            }
        }
        else if (isExecutor){
            try {
                const userId = sessionStorage.getItem('id')
                const userExecutorData = {
                    userId,
                    technologies,
                    experience,
                }
                const userExecutor = await api.post('/api/executors/', userExecutorData)
                sessionStorage.setItem('executorId',userExecutor.data.id)
                sessionStorage.setItem('technologies',userExecutorData.technologies)
                sessionStorage.setItem('experience',userExecutorData.experience)
                sessionStorage.setItem('cv',userExecutor.data.cv)
                navigate("/signinup")
                /*
                await dispatch(setExecutor({
                    technologies:  userExecutorData.technologies,
                    exeperience:  userExecutorData.experience,
                }
                ))
                 */
            } catch(e){
                console.log(e.message)
                return e
            }
        }
    }

    let btn_class_customer = isCustomer ? "SelectButton" : "nonSelectButton";
    let btn_class_executor = isExecutor ? "SelectButton" : "nonSelectButton";
    return (
       
        <div style={container}>
            <div style={text}>
                <h2>Вы?</h2>
                <div style={buttonBlock}>
                    <button onClick={handleCustomer} className={btn_class_customer}>Заказчик</button>
                    <button onClick={handleExecutor} className={btn_class_executor}>Исполнитель</button>
                </div>
            </div>
            <form action="#" onSubmit={handleSubmit}>
                {isCustomer ? <CustomerForm setEmployment={setEmployment} /> : null}
                {isExecutor ? <ExecutorForm setTechnologies={setTechnologies} setExeperience={setExeperience}/> : null}
            </form>
        </div>
    );
}