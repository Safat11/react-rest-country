import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);

    const{area , population, region, capital, name, flags} = props.country;    //Shortcut - destructuring
    
    return (
        <div className='country bg-warning'>

           {/*  <h2>Country Name: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
            <p>Capital: {props.capital}</p>
            <p><small>Region: {props.region}</small></p> */}
            
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <p><small>Region: {region}</small></p>
     
        </div>
    );
};

export default Country;
