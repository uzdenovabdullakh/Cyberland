import React, { useEffect } from "react";
import Category from "../components/Category"
//import Header from "../components/Header";
import { Link } from "react-router-dom";
import Arrow from "../components/Arrow"
import ChoosedFilter from "../components/ChoosedFilter";
import { UserDataHook } from "../utils/hooks/UserDataHook";
import { useAuth } from "../utils/hooks/useAuth";
import "./SearchAds.css"
import "./Cards.css"
import Header from "../components/Header";
import {api} from '../utils/axios/interceptors'
import SearchCards from "../components/SearchCards";
import { useLocation } from 'react-router-dom'
import SearchComponent from "../components/SearchComponent";


export default function SearchAds(){
    const [isClicked,setClicked]=React.useState(false);
    const [isDel, setDel] = React.useState(false) //коллбэк на нажатие удаление выбранного фильтра
    const [value, setValue] = React.useState('')
    const [isChoosed, setChoosed] = React.useState(false) //коллбэк на нажатие на фильтр
    const [tasksArr,setTasks] = React.useState([])

    const handleChoose = (value) => {
      setValue(value)//устанвлиаем текст
      setChoosed(true)//устанавливаем что фильтр выбран
      setClicked(false)//устанавливаем чтобы скрылась панель с фильтрами
      setDel(false)
    } 
    const handleDel = (value) => {
      setDel(value)
      setValue("")
      //setChoosed(false)
    }

        useEffect(()=>{
            const handleSearch = async () => {
            if (sessionStorage.getItem('searchText')){
                try{
                    const query = await api.get(`api/tasks/?search=${sessionStorage.getItem('searchText')}&types=${sessionStorage.getItem('type')}`)
                    setTasks([...query.data])
            
                    console.log(tasksArr)
                    sessionStorage.removeItem('searchText')
                    sessionStorage.removeItem('type')
                }catch(e){
                    console.log(e)
                }
            }
            else {
                return;
            }
        }
        handleSearch()
        })
        //тут отправка текста
        /*здесь передача текста из запроса на сервер, 
        также должны передаваться выбранные фильтры
        */
        const [searchText, setSearchText] = React.useState('')
        const handleSearch = async (e) => {
            e.preventDefault();
            try{
                const query = await api.get(`api/tasks/?search=${searchText}&types=${value}`)
            setTasks([...query.data])
            
            console.log(tasksArr)
            }
            catch(e){
                console.log(e)
            }
            
        }
            //console.log(value);

        const {customerId} = UserDataHook();
        const {isAuth} = useAuth();
        
       const cards = tasksArr.map((item)=>{
            return (
            <SearchCards key={item.id} customerTaskId={item.customer.id} customerName={item.customer.user.name + ' ' + item.customer.user.secondName} taskId={item.id} title={item.name} description={item.description} cost={item.cost} imgSrc={item.img} category={item.type}></SearchCards>
            );
        })

    return (
        <div className="search__main">
            {/*здесь добавить аватарку и имя фамилию если пользователь авторизован иначе нижняя строка*/}
            {/*isAuth? :null*/}
            <div className="non_auth_arrow"><Link to="/"><Arrow /></Link></div>
            <div className="search__wrapper">
                <div className="search__container">
                    <form id="search_form" action="#" onSubmit={handleSearch}>
                        <SearchComponent setClicked={setClicked} isClicked={isClicked} setSearchText={setSearchText}></SearchComponent>
                    </form>
                    {isChoosed && !isDel ? <ChoosedFilter val={value} onDel={handleDel}/> : false}
                    <h1>
                    Объявления по вашему запросу:
                    </h1>
                </div>
                {isClicked?<Category top="305px" left="140px" zIndex="2" onChoose={handleChoose}/> : false}
                <div className="ads__block">
                    <div className="cards">
                        {cards}
                </div>
            </div>
        </div>
        </div>
    );
}