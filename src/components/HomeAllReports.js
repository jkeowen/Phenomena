import React, {useState, useEffect} from "react";
import AddNewReport from "./AddNewReport";
import ReportsListings from "./ReportsListings";
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
            <ReportsListings reports={reports} setReports={setReports} searchInput={searchInput} searchCategory={searchCategory} /> 
        </div>
    )
}

export default HomeAllReports;