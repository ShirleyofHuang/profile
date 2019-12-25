import React from 'react';
import './aboutme.css';
import laptop from '../AboutMe/laptopcafe.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



export class AboutMe extends React.Component{

    render(){
        return (
            <div className="AboutMe">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"/>

            <div class="container">
                <div class="column">
            <div className="title">
              <h2>Who Is Shirley</h2>
            </div>
            
            <div className="profilepic">
                <img class="img-circle" width="117px" height="117px" src={laptop} alt=""></img>
                </div>
            
            <div className="paragraph">
                <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>School</h4>
                    <p>
                    I am currently a second year student studying at the University of Toronto
                    as a Computer Science student. 
                    </p>
                    <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>Skills</h4>
                    <p>I have experience with Java, Python, C++, Verilog among many other languages.
                        I have worked with designing UI as well as websites (like the one you are reading!

                    </p>
                    <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>Courses</h4>
                    <p>
                    I have successfully completed courses on Software Design as well as theoretical 
                    parts of Computer Science. Currently enrolled in other courses. And have been successfully
                    maintaining a GPA of 3.6.</p>
                    <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p>
                </div>
                <div class="container">
                <p><a href="#" class = "btn btn-dark" role ="button">Get Resume</a></p>

                </div>

                </div>

            </div>
              </div>

              </div>
              </div>
          
          
        )
    }
}