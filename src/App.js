import './App.css';
import React from "react"
import background from "./images/1.webp"
import { useState } from "react";
import { useEffect } from "react";
import Toggler from "./components/Toggler.js"
import Personas from "./components/Personas.js"
import Development from "./components/Development.js"
import Redesign from "./components/Redesign.js"
import AB from "./components/AB.js"
import img1 from "./images/img1.png"
import personas from "./images/personas.png"
import redesign from "./images/redesign.png"
import abtesting from "./images/abtesting.png"


function App() {
    const [toggler, setToggler] = useState("choose");

    function changeToggler(toggle){
        setToggler(toggle)
    }

     useEffect(() => {
      }, [toggler])


  return (

    <div className="App" style={{backgroundImage:  `url(${background})`}}>
      <h1>DreamyCat's Portfolio</h1>
      <h3 className="header"> Who I am </h3>
      <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start'}}> Hello! I am a computer science student at Brown
      who loves to learn new coding skills! I have been building up my knowledge on user interfaces and experiences and front end
      development. Choose one of my projects below to lean more about the work I've done and what I've learned along the way.
        </p>

        <ul class="image-gallery">
        <li>
            <img src={personas} alt=""/>
            <div class="overlay" className="header"><span>Personas</span></div>
          </li>
          <li>
            <img src={redesign} alt=""/>
            <div class="overlay" className="header"><span>Redesign</span></div>
          </li>
          <li>
            <img src={img1} alt=""/>
            <div class="overlay" className="header"><span>Iterative Design</span></div>
          </li>
          <li>
             <img src={abtesting} alt=""/>
             <div class="overlay" className="header"><span>A/B Testing</span></div>
          </li>
        </ul>
      <Toggler toggleselected={changeToggler}></Toggler>
      {toggler === "personas" ? <Personas></Personas> : null}
      {toggler === "development" ? <Development></Development> : null}
      {toggler === "ab" ? <AB></AB> : null}
      {toggler === "redesign" ? <Redesign></Redesign> : null}
      {toggler === "choose" ?
      <h3> Choose One of my Projects to Read About! </h3>: null}

    </div>

  );
}

export default App;
