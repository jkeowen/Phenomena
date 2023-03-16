import React, {useState, useEffect} from "react";
import fetchAllReports, {postNewReport, addNewComment} from "../AjaxHelpers";
const HomeAllReports = () => {

    const [reports, setReports] = useState([]);
    const [ addCommentInput, setAddCommentInput ] = useState('');
    const [ titleInput, setTitleInput ] = useState('');
    const [ passwordInput, setPasswordInput ] = useState('');
    const [ locationInput, setLocationInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');
    const [currentReport, setCurrentReport] = useState({comments:[]});


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
        postNewReport(titleInput, locationInput, descriptionInput, passwordInput, reports, setReports);
        setTitleInput('');
        setDescriptionInput('');
        setLocationInput('');
        setPasswordInput('')
    }

    const onAddComment = (event) =>{
        event.preventDefault();
        addNewComment(currentReport.id, addCommentInput, currentReport, setCurrentReport);
        setAddCommentInput('');
    }
    
    const commentChangeHandler = (event) =>{
        setAddCommentInput(event.target.value);
    }

    return(
        <div className= "home-all-reports">
            <div className="container">
                <h4>Create New Report</h4>
                <form onSubmit={submitHandler}>
                    <input className="form-control me-2" placeholder="Title" value={titleInput} onChange={onChangeNewReport}/>
                    <input className="form-control me-2" placeholder="Password" value={passwordInput} onChange={onChangeNewReport}/>
                    <input className="form-control me-2" placeholder="Location" value={locationInput} onChange={onChangeNewReport}/>
                    <textarea rows='4' cols='50' placeholder="Description" value={descriptionInput} onChange={onChangeNewReport}></textarea>
                    <button type="submit" className="btn btn-outline-success" >Submit</button>
                </form>
            </div>
            <div className="p-3 border border-1 border-dark">
                {
                    reports.map((report, index)=>{
                        return (
                            <div className="p-1 border border-1 border-dark" key={index}>
                                <div className="border-bottom border-dark">
                                    <h4>{report.title}</h4>
                                    <h6>Location: {report.location}</h6>
                                </div>
                                <p className="border-bottom border-dark">{report.description}</p>
                                <div>
                                    <h6>Comments</h6>
                                    {
                                        report.comments.length === 0 ?
                                        <p>No comments at this time</p> :
                                        <ul>
                                            {
                                                report.comments.map((comment, index)=>{
                                                    return <li key={index}>{comment.content}</li>
                                                })
                                            }
                                        </ul>
                                    }
                                </div>
                                <form className="d-flex" onSubmit={onAddComment}>
                                    <input className="form-control me-2" placeholder="Add New Comment" value={addCommentInput} onChange={commentChangeHandler}/>
                                    <button type="submit" className="btn btn-outline-success" onClick={()=> setCurrentReport(report) } >Submit</button>
                                </form>

                            </div>
                        )
                    })
                }
            </div>            
        </div>
    )
}


export default HomeAllReports;