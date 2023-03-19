const axios = require('axios');

const fetchAllReports = async(setter) =>{
    fetch(`/api/reports`)
    .then(response=> response.json())
    .then(result => {
        setter(result.reports)
    })
    .catch(console.error);
}

export const addNewComment = (reportId, content, currentReport ,setter) =>{
    axios.post(`/api/reports/${reportId}/comments`,{
        content
    })
    .then((response)=>{
        setter(currentReport.comments.push(response.data));
        return
    })
}

export const postNewReport = (title, location, description, password, currentReports, setter) =>{
   axios.post('/api/reports',{
    title, location, description, password
   })
   .then((response)=> {
    response.data.comments = []
    response.data.isExpired = false;
    setter([...currentReports, response.data])
   })
   .catch(console.err)
}

export const deleteReport = async(reportId, password, currentReport, reports, setter) =>{
    try{
        const response = await fetch(`/api/reports/${reportId}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                password
            })
        });
        const result = await response.json();
        if(result){
        const NewReports = reports.filter((report)=> report !== currentReport);
        setter(NewReports);
        return true;
        }
        else return false
    }catch(err){
        console.error(err)
    }
}


export default fetchAllReports;
