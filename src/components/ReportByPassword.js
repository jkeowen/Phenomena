import React, {useState, useEffect} from "react";


const ReportByPassword = () =>{

    const [ allReports, setAllReports ] = useState([]);
    const [ passwordInput, setPasswordInput ] = useState('');
    const [ passwordSubmit, setPasswordSubmit ] = useState(false);
const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
}

const submitHandler = ()=>{

}

    console.log(passwordInput)
    return(
        <div className="report-by-password">
            <form>
                <input placeholder="password" onChange={passwordChangeHandler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default ReportByPassword;