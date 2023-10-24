import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
    return (
        <div className='post'>
            <h5>Id: {id}</h5>
            <h4>Title: {title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <button>Show Post Details</button>
        </div>
    );
};

export default Post;