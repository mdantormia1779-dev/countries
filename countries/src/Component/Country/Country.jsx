import React, { useState } from 'react';
import "./Country.css"

const Country = ({country,handleVisitedCountries}) => {
    const [visited, setVisited]=useState(false);
    const handleClick=()=>{
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && "active-countries"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "big country": "small country"}</p>
            <button onClick={handleClick}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;