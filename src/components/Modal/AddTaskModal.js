import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from '../../utils/axios/interceptors'

export default function AddTaskModal(){
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [taskCategory,setTaskCategory]=useState('')
    const [cost,setCost] = useState('')
    const [photo,setPhoto] = useState('')
    //const [drag,setDrag] = useState(false)


    const onLoadDropHandler = (e) =>{
        e.preventDefault()
        let selectedFile = e.target.files[0];
        let reader = new FileReader();
        let imgtag = document.getElementById("out_image");
        imgtag.title = selectedFile.name;

        reader.onload = function(e) {
            imgtag.src = e.target.result;
        };

        reader.readAsDataURL(selectedFile);
        setPhoto(selectedFile)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const customerId = sessionStorage.getItem('customerId');
            /*const task = {
                customerId,
                description,
                cost,
                title,
                photo,
            }*/
            const task= new FormData()
            
            task.append('customerId',customerId)
            task.append('description',description)
            task.append('cost',cost)
            task.append('name',title)
            task.append('img',photo)
            task.append('type',taskCategory) //добавить категорию
            await api.post('/api/tasks/',task)
            navigate('/')
        }catch(e){
            console.log(e.message)
            return e
        }
    }



    return (
        <div className="modal-body modal-body-task">
            <h1>Размещение объявления</h1>
            <div className="task__body">
            <div className="task__photo">
                <input type='file' className="photo_file" onChange={(e)=>onLoadDropHandler(e)}></input>
                <img id="out_image" alt=""></img>
                <label>Добавить фото</label>
            </div>
            <div className="main__block">
                <div className="title">
                    <input className="task__inputs" required placeholder="Название" type="text" onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className="description">
                    <textarea className="description__text" required placeholder="Описание" cols="30" rows="5" onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className="task__category">
                    <input className="task__inputs" required placeholder="IT-сфера" type="text" onChange={(e)=>setTaskCategory(e.target.value)}></input>
                </div>
                <div className="cost">
                    <input className="task__inputs" required placeholder="Цена" type="text" onChange={(e)=>setCost(e.target.value)}></input>
                </div>
                <div className="task__buttons">
                    <button className="adding_button" type="submit" onClick={handleSubmit}>Разместить</button>
                    <button className="cancel_button" onClick={()=>{navigate('/')}}>Отмена</button>
                </div>
            </div>
            </div>
        </div>
    );
}