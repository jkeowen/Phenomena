import React, {useState, useEffect} from "react";
import Search from "./Search";
import Comments from "./Comments";
import Delete from "./Delete";
import fetchAllReports, {postNewReport, addNewComment, deleteReport} from "../AjaxHelpers";
const HomeAllReports = () => {

    const [ reports, setReports ] = useState([]);
    const [ titleInput, setTitleInput ] = useState('');
    const [ passwordInput, setPasswordInput ] = useState('');
    const [ locationInput, setLocationInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');
    const [ submitMessage, setSubmitMessage ] = useState('');
    const [ sumbitMessageClass, setSubmitMessageClass ] = useState('')
    const [ searchInput, setSearchInput ] = useState('');
    const [ searchCategory, setSearchCategory ] = useState('title');


    useEffect(()=>{
        fetchAllReports(setReports)
    },[]);


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
        <div className= "home-all-reports container">
            <div className="container-md">
                <h4>Create New Report</h4>
                <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
                    <input className="form-control w-75" placeholder="Title" value={titleInput} onChange={onChangeNewReport}/>
                    <input className="form-control w-75" placeholder="Password" value={passwordInput} onChange={onChangeNewReport}/>
                    <input className="form-control w-75" placeholder="Location" value={locationInput} onChange={onChangeNewReport}/>
                    <textarea rows='4' cols='67' placeholder="Description" value={descriptionInput} onChange={onChangeNewReport}></textarea>
                    <button type="submit" className="btn btn-outline-success" >Submit</button>
                    <h5 className={sumbitMessageClass}>{submitMessage}</h5>
                </form>
                <Search setSearchInput={setSearchInput} searchCategory={searchCategory} setSearchCategory={setSearchCategory}/> 
            </div>
            <div className="p-3 border border-1 border-dark">
                {
                    reports.filter((report)=> {
                        if(searchInput === '') return report;
                        else if(report[searchCategory].toLowerCase().includes(searchInput.toLocaleLowerCase())) return report
                    }).map((report, index)=>{
                        return (
                            <div className="p-1 border border-1 border-dark" key={index}>
                                
                                <h4>{report.title}</h4>
                                <div  className="border-bottom border-dark">
                                <div className="d-flex justify-content-between align-self-center
                                                m-2">
                                        <h6>Location: {report.location}</h6>
                                        <Delete report={report} reports={reports} setReports={setReports} />
                                </div>
                                </div>
                                <p className="border-bottom border-dark m-2">{report.description}</p>
                                <Comments report={report}/>
                            </div>
                        ) 
                    })
                }
            </div>            
        </div>
    )
}


export default HomeAllReports;