import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countryPromise }) => {
    const [visitedCountries, setVisitedCountries]=useState([]);
    const handleVisitedCountries=(country)=>{
        console.log("clicked",country);
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }

    const countriesData = use(countryPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>Countries {countries.length}</h1>
            <p>Total visited countries: {visitedCountries.length} </p>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3
                } country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;