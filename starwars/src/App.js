// import React from 'react';
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

import './App.css';
import axios from 'axios';

import StarwarsCard from './components/StarwarsCard';



const App = () => {
const [names, setNames] = useState([]);


  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(data => {
        setNames(data.data.results);

      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  // console.log(names);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {
            names.map((data, index) => {
            return <StarwarsCard key={index} name={data.name} height={data.height} mass={data.mass} eye_color={data.eye_color} birth_year={data.birth_year}/>
            })
        }
      </div>
    </div>


  );
}


// { StarWarArr.forEach((card) => new StarwarsCard(card)) }

// console.log(StarWarArr);

export default App;



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.





