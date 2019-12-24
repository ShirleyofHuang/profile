import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from './Components/Title/title';
import {Home} from './Components/Home/home';
import {Slideshows} from './Components/Slideshow/slideshow';
import Projects from './Components/Projects/projects';
import python from './python.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsBox from './Components/ProjectsBox/projectsbox';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
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
      <div className="Projects">
        <Projects></Projects>
      </div>

      <div className="Bootstrap">
      <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </div>
    
    </div>
  );
}

export default App;
