import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowCountry = () => {
    const showCountry = useLoaderData()[0]
    return (
        <div>
            <h3>Show Details</h3>
            <h2>Name: {showCountry.name.common}</h2>
            <h3>Region: {showCountry.region}</h3>
            <h3>Capital: {showCountry.capital}</h3>
            <img src={showCountry.flags.png} alt="" />
        </div>
    );
};

export default ShowCountry;