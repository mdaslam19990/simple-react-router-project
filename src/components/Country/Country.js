import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Country.css";


const Country = ({ country }) => {
    const { name, flags, population, region } = country;

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/country/${name.common}`)
    }

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <h3>Region: {region}</h3>
            <h3>Pupolation: {population}</h3>
            <button onClick={handleNavigate}>Details</button>
        </div>
    );
};

export default Country;