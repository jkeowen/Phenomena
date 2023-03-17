import React, {useState, useEffect} from "react";
import Search from "./Search";
import fetchAllReports, {postNewReport, addNewComment, deleteReport} from "../AjaxHelpers";
const HomeAllReports = () => {

    const [reports, setReports] = useState([]);
    const [ addCommentInput, setAddCommentInput ] = useState('');
    const [ titleInput, setTitleInput ] = useState('');
    const [ passwordInput, setPasswordInput ] = useState('');
    const [ locationInput, setLocationInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');
    const [currentReport, setCurrentReport] = useState({comments:[]});
    const [ currentDeleting, setCurrentDeleting ] = useState({});
    const [ deletePasswordInput, setDeletePasswordInput ] = useState('');
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

    const deletePasswordInputHandler = (event) => {
        setDeletePasswordInput(event.target.value);
    }

    const deleteHandler = (event) =>{
        event.preventDefault();
        deleteReport(currentDeleting.id, deletePasswordInput, currentDeleting, reports, setReports);
        setCurrentDeleting({});
    }

    const commentChangeHandler = (event) =>{
        setAddCommentInput(event.target.value);
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
                                        {
                                            currentDeleting === report ? <form 
                                                        onSubmit={deleteHandler}>
                                                         <input placeholder="enter password" onChange={deletePasswordInputHandler}/>
                                                         <button type="submit" className="btn btn-outline-danger"
                                                         >Delete</button>
                                                       </form> :
                                                       <button onClick={()=>setCurrentDeleting(report)} type="button" className="btn btn-outline-warning" 
                                                        >Delete</button>
                                        }
                                        
                                </div>
                                </div>
                                <p className="border-bottom border-dark m-2">{report.description}</p>
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
                                    <textarea row='2' column='15' className="form-control me-2" placeholder="Add New Comment" value={addCommentInput} onChange={commentChangeHandler}></textarea>
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