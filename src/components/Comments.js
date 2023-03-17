import React, {useState} from 'react';
import { addNewComment } from '../AjaxHelpers';

const Comments = ({report}) =>{

    const [ addCommentInput, setAddCommentInput ] = useState('');
    const [ currentCommented, setCurrentCommented ] = useState({});
    const [ missingCommentMessage, setMissingCommentMessage ] = useState('');

    const addCommentHander = (event) =>{
        event.preventDefault();
        if(addCommentInput){
        addNewComment(currentCommented.id, addCommentInput, currentCommented, setCurrentCommented);
        setCurrentCommented({});
        }
        else{
            setMissingCommentMessage('Cannot Submit nothing')
        }
    }
    const commentChangeHandler = (event) =>{
        setAddCommentInput(event.target.value);
    }

return(

    <div id="comments">
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
        {
        currentCommented === report ? 
            <form onSubmit={addCommentHander}>
                <textarea rows="5" cols="40" placeholder="add comment" onChange={commentChangeHandler}></textarea>
                <button type="submit" className="btn btn-outline-success"
                >Submit</button>
                <h5 className='text-danger'>{missingCommentMessage}</h5>
            </form> :
            <button onClick={()=>setCurrentCommented(report)} type="button" className="btn btn-light" 
            >Add Comment</button>
        }
    </div>
    )
}

export default Comments;