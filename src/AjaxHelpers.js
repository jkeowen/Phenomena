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
    setter([...currentReports, response.data])
    return
   })
   .catch(console.err)
}



export default fetchAllReports;
