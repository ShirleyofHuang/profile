import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from './Components/Title/title';
import {Home} from './Components/Home/home';
import {Slideshows} from './Components/Slideshow/slideshow';

function App() {
  return (
    <div className="App">
      <div className="App-title-bar">
        <h1 className="App-title">i'm shirley</h1>
        <Title enter="Let's Go"></Title>
      </div>
      <div className="App-slideshow">
        <Slideshows></Slideshows>
      </div>
      <div className="App-homepage">
         <Home></Home>
      </div>
    
    </div>
  );
}

export default App;
