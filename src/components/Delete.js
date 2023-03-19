import React, {useState} from "react";
import { deleteReport } from "../AjaxHelpers";

const Delete = ({ report, reports, setReports }) =>{

    const [ currentDeleting, setCurrentDeleting ] = useState({});
    const [ deletePasswordInput, setDeletePasswordInput ] = useState('');
    const [wrongPasswordMessage, setWrongPasswordMessage ] = useState('')

    const deletePasswordInputHandler = (event) => {
        setDeletePasswordInput(event.target.value);
    }

    const deleteHandler = (event) =>{
        event.preventDefault();
        deleteReport(currentDeleting.id, deletePasswordInput, currentDeleting, reports, setReports);
        setCurrentDeleting({});
        setWrongPasswordMessage('Incorrect Password')
        
        
    }


    return(
        <div id='delete'>
            {
                currentDeleting === report ? 
                <form className="d-flex align-items-center"
                    onSubmit={deleteHandler}>
                    <input placeholder="enter password" className="mr-3" onChange={deletePasswordInputHandler}/>
                    <button type="submit" className="btn btn-outline-danger"
                    >Delete</button>
                </form> :
                <div className="d-flex align-content-center">
                    <p className="mr-1 text-danger">{wrongPasswordMessage}</p>
                    <button onClick={()=>setCurrentDeleting(report)} type="button" className="btn btn-outline-warning" 
                    >Delete</button>
                </div>
            }
        </div>
    )
}

export default Delete;