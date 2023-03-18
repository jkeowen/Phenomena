import React, {useState} from "react";
import { postNewReport } from "../AjaxHelpers";
import Search from "./Search";

const AddNewReport = ({
        reports,
        setReports,
        setSearchInput,
        searchCategory, 
        setSearchCategory
            }) =>{

    const [ titleInput, setTitleInput ] = useState('');
    const [ passwordInput, setPasswordInput ] = useState('');
    const [ locationInput, setLocationInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');
    const [ submitMessage, setSubmitMessage ] = useState('');
    const [ sumbitMessageClass, setSubmitMessageClass ] = useState('')

    const onChangeNewReport = (event) => {
        if(event.target.placeholder === 'Title') setTitleInput(event.target.value);
        else if(event.target.placeholder=== 'Password') setPasswordInput(event.target.value);
        else if(event.target.placeholder === 'Location') setLocationInput(event.target.value);
        else setDescriptionInput(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        if(titleInput && descriptionInput && locationInput && passwordInput){
            setSubmitMessageClass('text-success')
            setSubmitMessage('Your report has been posted!')
            postNewReport(titleInput, locationInput, descriptionInput, passwordInput, reports, setReports);
            setTitleInput('');
            setDescriptionInput('');
            setLocationInput('');
            setPasswordInput('')
        }
        else{
            setSubmitMessageClass('text-danger')
            setSubmitMessage('Please fillout all fields');
        }
    } 
 

    return(
        <div className="container-md">
                <h4>Create New Report</h4>
                <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
                    <input className="form-control w-75" placeholder="Title" value={titleInput} onChange={onChangeNewReport}/>
                    <input className="form-control w-75" type="password" placeholder="Password" value={passwordInput} onChange={onChangeNewReport}/>
                    <input className="form-control w-75" placeholder="Location" value={locationInput} onChange={onChangeNewReport}/>
                    <textarea rows='4' cols='67' placeholder="Description" value={descriptionInput} onChange={onChangeNewReport}></textarea>
                    <button type="submit" className="btn btn-outline-success" >Submit</button>
                    <h5 className={sumbitMessageClass}>{submitMessage}</h5>
                </form> 
                <Search setSearchInput={setSearchInput} searchCategory={searchCategory} setSearchCategory={setSearchCategory}/>
            </div>
    )
}

export default AddNewReport;