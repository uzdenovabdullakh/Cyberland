import React, { Component } from "react";
import {api} from '../utils/axios/interceptors'
import "../pages/Cards.css"
import Cards from "./Cards";
export class CustomerAcc extends Component {
    //здесь запрос на получение всех тасков этого кастомера
    //в зависимости от размера массива с тасками вывести карточки
    constructor(props) {
        super(props);
        this.state = {
            tasksArr: [],
        };
    }

   
    componentDidMount(){
        /*api.get(`api/tasks/`)
            .then((res) => {
                //console.log(res.data)
                sessionStorage.setItem('taskCount', res.data.length)
                this.setState({
                    tasksArr: [...res.data],
                    ourUserTasks: [...res.data.filter((user) => user.customer.id===`${this.state.customerId}`)],
                })
                //this.state.tasksArr.push(...res.data)
                //console.log(this.state.tasksArr[0])
                //console.log(this.state.ourUserTasks)
            })
        .catch(console.error)*/
        //console.log(sessionStorage.getItem('customerId'))
        api.get(`api/customers/${sessionStorage.getItem('customerId')}`)
            .then((res) => {
                sessionStorage.setItem('taskCount', res.data.tasks.length)
                this.setState({
                    tasksArr: [...res.data.tasks],
                })
                
            })
        .catch(console.error)
        
        if(sessionStorage.getItem('isClick')){
            console.log("ss")
            api.delete(`api/tasks/${sessionStorage.getItem('taskId')}`);
            sessionStorage.removeItem('isClick')
            sessionStorage.removeItem('taskId')
        }
        
    } 
    
    componentDidUpdate(){
        if(sessionStorage.getItem('isClick')){
            console.log("ss")
            api.delete(`api/tasks/${sessionStorage.getItem('taskId')}`);
            sessionStorage.removeItem('isClick')
            sessionStorage.removeItem('taskId')
        }
    }


    full = () =>{
        
    }
    


    render () {
    
        const cards = this.state.tasksArr.map((item)=>{
            return (
                <Cards key={item.id} customerTaskId={sessionStorage.getItem('customerId')} customerName={sessionStorage.getItem('name')+' '+sessionStorage.getItem('secondName')} taskId={item.id} title={item.name} description={item.description} cost={item.cost} imgSrc={item.img} category={item.type}></Cards>
                );
        })
       
       
        if (sessionStorage.getItem('taskCount')===0){
            return (
                <div className="account__wrapper">
                <h1>
                    Ваши объявления:
                </h1>
                <div className="ads__block">
                    <div className="cards">
                    <p>Нет объявлений</p>
                    </div>  
                </div>
            </div>
            );
        }
        else if (sessionStorage.getItem('taskCount')!==0) {
            return (
            <div className="account__wrapper">
                <h1>
                    Ваши объявления:
                </h1>
                {/*модал */}
                <div className="ads__block">
                    <div className="cards">
                        {cards}
                        {/*<Cards key={item.id} title={item.name} description={item.description} cost={item.cost} id={item.customer.id} imgSrc={item.img} category={item.type}></Cards> */}
                    </div>  
                </div>
            </div>
        )
        }
    };
}