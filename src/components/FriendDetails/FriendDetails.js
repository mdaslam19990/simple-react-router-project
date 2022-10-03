import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h2>Friend Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <h2>This is my Friend Details Page that you will contact easily</h2>
        </div>
    );
};

export default FriendDetails;