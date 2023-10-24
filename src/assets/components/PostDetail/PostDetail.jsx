import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h3>Details about your post</h3>
            <h5>Id: {id}</h5>
            <h4>Title: {title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;