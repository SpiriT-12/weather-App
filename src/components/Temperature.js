import React, { useEffect, useState } from 'react';
import './style.css';
const Temperature = () => {
   const [city, setCity] = useState(null);
   const [search, setSearch] = useState('Bangalore');

   useEffect(() => {
      const fetchApi = async () => {
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2b7b2f0d65d021409603ca3eacd93243&units=metric`;
         const response = await fetch(url);
         const resJson = await response.json();
         setCity(resJson.main);
      };
      fetchApi();
   }, [search]);

   return (
      <>
         <div className='box'>
            <div className='inputData'>
               <input
                  type='search'
                  value={search}
                  className='inputField'
                  onChange={(event) => {
                     setSearch(event.target.value);
                  }}
               />
            </div>
            {!city ? (
               <p className='errorMsg'>City Not Found</p>
            ) : (
               <div>
                  <div className='info'>
                     <h2 className='location'>
                        <i className='fad fa-street-view'></i>
                        <span>{search}</span>
                     </h2>

                     <h1 className='temp'>{city.temp}°Cel</h1>
                     <h3 className='tempmin_max'>
                        Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                     </h3>
                  </div>

                  <div className='wave -one'></div>
                  <div className='wave -two'></div>
                  <div className='wave -three'></div>
               </div>
            )}
         </div>
      </>
   );
};

export default Temperature;
