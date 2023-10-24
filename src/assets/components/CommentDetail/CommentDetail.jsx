import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CommentDetail = () => {
    const comment = useLoaderData();
    // console.log(comment);
    const {id,name,email,body} = comment;
    
    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h3>Details about your comment</h3>
            <h5>Id: {id}</h5>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>{body}</p>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default CommentDetail;