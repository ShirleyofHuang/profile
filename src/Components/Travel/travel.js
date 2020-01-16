import React from 'react';
import './travel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from 'react-photo-gallery';
import japan from './kyotojapan.jpg';
import china from './tianjinchina.jpg'
  
export class Travel extends React.Component{

    render(){


        return (
            <div className="Travel">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <br></br>
            <br></br>
            <h2 class="travelling">Travelling is a part of me</h2>
            <hr></hr>
            <h5 class="quote">"JOBS FILL THE POCKET, BUT ADVENTURE FILLS THE SOUL "</h5>

            <div class="pictures">
              <div class="container">
              <div class ="column">
                
                <img src={japan} width="20%" height="20%"></img>
                <img src={china} width="20%" height="20%"></img>
                <img src={china} width="20%" height="20%"></img>
                <img src={china} width="20%" height="20%"></img>


               
            </div>
            </div>
            </div>
            </div>
            
               

        )
    }
}