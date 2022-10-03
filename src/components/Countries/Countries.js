import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import "../Home/Home.css";
import "./Countries.css";


const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h2 className='container'>All Countries Here: {countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca2} country={country}/>)
                }
            </div>
        </div>
    );
};

export default Countries;