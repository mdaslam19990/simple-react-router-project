import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import "../Home/Home.css";
import "./Post.css";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2 className='container'>There are a lots of Fb Post.....</h2>
            <div className='posts'>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default Posts;