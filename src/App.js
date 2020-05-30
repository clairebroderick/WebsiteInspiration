import React from 'react';
import './App.css';
import {BgRandom} from "./Components/BgRandom/BgRandom";
import {TxtRandom} from "./Components/TxtButton/TxtRandom";
import {RandomFont} from "./Components/Font/RandomFont";
import {AccentRandom} from "./Components/Accent/AccentRandom";

//Set the style for the header which will be fixd color and font
const headerStyle = {
  backgroundColor: "black", 
  fontFamily: "Verdana", 
  color: "rgb(115,59,47)",
  padding: 20
  
}

function App() {
  return (
    <div>
      <div className="App" style = {headerStyle}>
        <h1>Website Design Generator</h1>
        <p>Click the buttons to change the colour scheme.</p>            
      </div>
      <div id="buttonDiv">
      <BgRandom />
      <TxtRandom />
      <RandomFont />
      <AccentRandom />
    </div>
  </div>
  );
}

export default App;
