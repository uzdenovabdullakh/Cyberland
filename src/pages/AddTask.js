import React from "react";
import AddTaskModal from '../components/Modal/AddTaskModal'
import './AddTask.css'

export default function SignInUp(){
    return (
        <div className="add_task_main">
            <div className="add_task__sign">
                <div className='modal'>
                    <AddTaskModal></AddTaskModal>
                </div>
            </div>
        </div>
    );
}
