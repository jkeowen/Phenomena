import React, {useState} from "react";
import { deleteReport } from "../AjaxHelpers";

const Delete = ({ report, reports, setReports }) =>{

    const [ currentDeleting, setCurrentDeleting ] = useState({});
    const [ deletePasswordInput, setDeletePasswordInput ] = useState('');

    const deletePasswordInputHandler = (event) => {
        setDeletePasswordInput(event.target.value);
    }

    const deleteHandler = (event) =>{
        event.preventDefault();
        deleteReport(currentDeleting.id, deletePasswordInput, currentDeleting, reports, setReports);
        setCurrentDeleting({});
    }


    return(
        <div id='delete'>
            {
                currentDeleting === report ? 
                <form 
                    onSubmit={deleteHandler}>
                    <input placeholder="enter password" onChange={deletePasswordInputHandler}/>
                    <button type="submit" className="btn btn-outline-danger"
                    >Delete</button>
                </form> :
                <button onClick={()=>setCurrentDeleting(report)} type="button" className="btn btn-outline-warning" 
                >Delete</button>
            }
        </div>
    )
}

export default Delete;