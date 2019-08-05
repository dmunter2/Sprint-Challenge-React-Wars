// import React from 'react';
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

import './App.css';
import axios from 'axios';

import StarwarsCard from './components/StarwarsCard';

const App = () => {
const [names, setNames] = useState()

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(data => {
        const PrimeName = data.data.results[2].name
        console.log(PrimeName)
        setNames(PrimeName);

      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarwarsCard characterName={names} />

    </div>


  );
}

export default App;



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.





