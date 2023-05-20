import React from "react"; 
import PropTypes from "prop-types";

function ResumeBtn (props){
    const {setclickResume} = props
    return (
        <div>
            <label className="input-file">
	   	        <input type="file" onChange={(e)=>setclickResume(e)} name="file" />		
	   	        <span className="input__btn__name">Добавить резюме</span>
 	        </label>
           
        </div>
    );

}

ResumeBtn.propTypes = {
    setclickResume: PropTypes.func.isRequired,
}

export default ResumeBtn;