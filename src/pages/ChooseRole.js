import React from "react";
import ExecutorForm from "../components/Modal/ExecutorForm";
import CustomerForm from "../components/Modal/CustomerForm";
import './ChooseRole.css'
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

    const [exeperience, setExeperience] = React.useState('')//коллбэк функции
    const [technologies, setTechnologies] = React.useState('')
    const [employment, setEmployment] = React.useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        //регистрация
        if (isCustomer){
            const userCustomerData = {
                employment,
            }
            //const newUser = await instance.post('/api/auth/registration',userData)
            //navigate("/")
           // console.log(newUser.data)
            
            console.log("registr2customer")
        }
        else if (isExecutor){
            const userExecutorData = {
                technologies,
                exeperience,
            }
            console.log("registr2executor")
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