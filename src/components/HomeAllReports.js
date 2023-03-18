import React, {useState, useEffect} from "react";
import AddNewReport from "./AddNewReport";
import Delete from "./Delete";
import Comments from "./Comments";
import fetchAllReports from "../AjaxHelpers";
const HomeAllReports = () => {

    const [ reports, setReports ] = useState([]);
    
    const [ searchInput, setSearchInput ] = useState('');
    const [ searchCategory, setSearchCategory ] = useState('title');


    useEffect(()=>{
        fetchAllReports(setReports)
    },[]);


    

    
    return(
        <div className= "home-all-reports container">
            <AddNewReport reports={reports} setReports={setReports} setSearchInput={setSearchInput} 
            searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
            <div className="p-3 border border-1 border-dark">
                {
                    reports.filter((report)=> {
                        if(report.isExpired === false){
                            if(searchInput === '') return report;
                            else if(report[searchCategory].toLowerCase().includes(searchInput.toLocaleLowerCase())) return report
                        }
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