import React from "react";
import Category from "../components/Category"
import Header from "../components/Header";
import ChoosedFilter from "../components/ChoosedFilter";
import "./SearchAds.css"

export default function (){
    const [isClicked,setClicked]=React.useState(false);
    const [isDel, setDel] = React.useState(false) //коллбэк на нажатие удаление выбранного фильтра
    const [value, setValue] = React.useState('')
    const [isChoosed, setChoosed,] = React.useState(false) //коллбэк на нажатие на фильтр

    const handleChoose = (value) => {
      setValue(value)//устанвлиаем текст
      setChoosed(true)//устанавливаем что фильтр выбран
      setClicked(false)//устанавливаем чтобы скрылась панель с фильтрами
      setDel(false)
    } 
    const handleDel = (value) => {
      setDel(value)
      //setChoosed(false)
    }
    return (
        <div className="search__main">
            <Header />
            <div className="search__wrapper">
                <div className="search__container">
                    <form id="search_form" action="#" method="get">
                        <input name="search_input" type="text" id="search_input" required placeholder="..." maxLength="40"/>
                        <div className="icon"></div>
                        <button className="category_filter" onClick={() => setClicked(!isClicked)}></button>
                        <button type="submit" id="search_button">Поиск</button>
                    </form>
                    {isChoosed && !isDel ? <ChoosedFilter val={value} onDel={handleDel}/> : false}
                    <h1>
                    Объявления по вашему запросу:
                    </h1>
                </div>
                {isClicked?<Category top="265px" left="140px" zIndex="2" onChoose={handleChoose}/> : false}
                <div className="ads__block">
                    <div className="cards">
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
}