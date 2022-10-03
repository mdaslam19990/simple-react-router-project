import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Post.css";

const Post = ({post}) => {
    // console.log(post)
    const {body, id, title} = post;

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    } 

    return (
        <div className='post'>
            <h2>Title: {title}</h2>
            <p className='desc'>Desc: {body}</p>
            <Link to={`/post/${id}`} className="button"><button>Show Details</button></Link>
        </div>
    );
};

export default Post;