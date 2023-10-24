import React from 'react';
import './Comment.css';
import { Link, useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {
    const {id,name,email,body} = comment;
    // console.log(comment.id);
    
    const navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(`/comment/${id}`);
    }

    return (
        <div className='comment'>
            <h4>Id: {id}</h4>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>{body}</p>
            <Link to={`/comment/${id}`}><button>More Details</button></Link>
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Comment;