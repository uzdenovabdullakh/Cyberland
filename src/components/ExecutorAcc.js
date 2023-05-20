import React,{useEffect, useState} from "react";
import "../pages/Cards.css"
import Cards from "./Cards";
import {api} from '../utils/axios/interceptors'

function ExecutorAcc () {
    //здесь запрос на получение всех тасков на которые откликнулся executor
    const [cards, setCards] = useState([])
    
    
    //let isDone = false
    useEffect(()=>{
    
     const handleExecutorsCard = async () =>{
            if (sessionStorage.getItem('isDone')){
            try {
                const task =  await api.get(`api/executors/${sessionStorage.getItem('executorId')}`)
                const a = []
                let b = []
                let c = []
                let r = []
                a.push([...task.data.requests])
                sessionStorage.setItem('requestId',a)
                b = task.data.requests.filter((item)=>{
                    return task
                })
                r = b.map((item)=>{
                    return item.id
                })
                c = b.map((item)=>{
                    return item.task
                })
                
                console.log(c)
                const cards = c.map((item)=>{
                    return (
                        <Cards key={item.id} customerTaskId={item.customer.id} taskId={item.id} title={item.name} description={item.description} cost={item.cost} imgSrc={item.img} category={item.type} request={r}></Cards>
                    );
                })
                setCards([...cards])
                sessionStorage.removeItem('isDone')
                
                
            /*task.then((res)=>{
                const a = []
                let b = []
                let c = []
                a.push([...res.data.requests])
                b = res.data.requests.filter((item)=>{
                    return task
                })
                c = b.map((item)=>{
                    return item.task
                })
                const cards = c.map((item)=>{
                    return (
                        <Cards key={item.id} customerTaskId={item.customer.id} taskId={item.id} title={item.name} description={item.description} cost={item.cost} imgSrc={item.img} category={item.type}></Cards>
                    );
                })
                setCards([...cards])
                console.log(cards)
            })*/

    
            }
        catch(e){
            console.log(e)
            sessionStorage.removeItem('isDone')
        }
        }
     }
        
    
     //if(){
        handleExecutorsCard()
     //}
    
   
    })
    
   const getTasks = async () =>{
       
        try {
            const task = await api.get(`api/executors/${sessionStorage.getItem('executorId')}`)
        //console.log(task.data.requests)
        //console.log(task.data.requests[0].task)
        const a = []
        let b = []
        let c = []
        let r = []
        a.push([...task.data.requests])
        sessionStorage.setItem('requestId',a)

        b = task.data.requests.filter((item)=>{
            return task
        })
        r = b.map((item)=>{
            return item.id
        })
        c = b.map((item)=>{
            return item.task
        })
        
        
        //это массив тасков

        const cards = c.map((item)=>{
            return (
                <Cards key={item.id} customerTaskId={item.customer.id} taskId={item.id} title={item.name} description={item.description} cost={item.cost} imgSrc={item.img} category={item.type} request={r}></Cards>
            );
        })
        setCards([...cards])
        }
        catch(e){
            console.log(e)
        }
        
    }
    return (
        <div className="account__wrapper">
                <h1>
                    Откликнутые объявления:
                  
                </h1>
                <div className="ads__block">
                    <div className="cards">
                       {cards}
                </div>
            </div>
        </div>
    )
}

export default ExecutorAcc;