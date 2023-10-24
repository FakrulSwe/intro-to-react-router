import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    // console.log(friend);
    const {name,email,phone,id,website} = friend;
    
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h3>Everything about this person here </h3>
            <h5>Id: {id}</h5>
            <h4>Name: {name}</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default FriendDetail;