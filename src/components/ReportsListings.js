import React from "react";
import Comments from "./Comments";
import Delete from "./Delete";

const ReportsListings = ({
    reports,
    setReports,
    searchInput,
    searchCategory,
}) =>{

    return(
        <div className="p-3 k">
                {
                    reports.filter((report)=> {
                        if(report.isExpired === false){
                            if(searchInput === '') return report;
                            else if(report[searchCategory].toLowerCase().includes(searchInput.toLocaleLowerCase())) return report
                        }
                    }).map((report, index)=>{
                        return (
                            <div className="p-2 mb-2 third-color rounded" key={index}>
                                
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
    )
}
 
export default ReportsListings