import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData()
    const {title, body, userId} = postDetails;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>See your post details</h2>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>
            <button onClick={handleNavigate}>get author</button>
        </div>
    );
};

export default PostDetails;