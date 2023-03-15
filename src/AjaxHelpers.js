

const fetchAllReports = async(setter) =>{
    fetch(`/api/reports`)
    .then(response=> response.json())
    .then(result => {
        setter(result.reports)
    })
    .catch(console.error);
}

const addCommentToPost = ()

export default fetchAllReports;
