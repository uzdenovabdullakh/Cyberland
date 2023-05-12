import React from "react";
import PropTypes from "prop-types";
import './Modal.css'

function CustomerForm(props){
    const {setEmployment} = props
    return (
        <div className="choosing_inputs">
            <label>Ваша сфера деятельности:</label>
            <input className="inputs" type="text" required onChange={(e)=>setEmployment(e.target.value)}></input>
            <button className="submit_btn submit_btn_choosing" type="submit">Завершить регистрацию</button>
        </div>
    );
}

CustomerForm.propTypes = {
    setEmployment: PropTypes.func.isRequired,
}

export default CustomerForm;