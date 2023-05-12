import React from "react";
import PropTypes from "prop-types";
import './Modal.css'

function ExecutorForm(props){
    const {setTechnologies, setExeperience} = props
    return (
        <div className="choosing_inputs">
            <label>Опыт работы</label>
            <input className="inputs" type="text" required onChange={(e)=>setExeperience(e.target.value)}></input>
            <label>Технологии</label>
            <input className="inputs" type="text" required onChange={(e)=>setTechnologies(e.target.value)}></input>
            <button className="submit_btn submit_btn_choosing" type="submit">Завершить регистрацию</button>
        </div>
    );
}

ExecutorForm.propTypes = {
    setTechnologies: PropTypes.func.isRequired,
    setExeperience: PropTypes.func.isRequired,
}

export default ExecutorForm;