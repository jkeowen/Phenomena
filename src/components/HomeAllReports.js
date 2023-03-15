import React, {useState, useEffect} from "react";
import fetchAllReports from "../AjaxHelpers";
const HomeAllReports = () => {

    const [reports, setReports] = useState([]);
    const [ addCommentInput, setAddCommentInput ] = useState('');
    useEffect(()=>{
        fetchAllReports(setReports)
    },[])
    return(
        <div className= "home-all-reports">
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
                                <form className="d-flex">
                                    <input className="form-control me-2" placeholder="Add New Comment"/>
                                    <button type="submit" className="btn btn-outline-success">Submit</button>

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