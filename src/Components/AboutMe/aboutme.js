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
                    lakjfldkjlajsdlkfjalskdfjlajflskdjflaksjflksjflkdj
                    jdflakjdlfkjasdlfjaslfjsdlkfjsdlfjsdlfkjslfjdalkfja
                    lajfladskjflsdjf
                    </p>
                    <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>Skills</h4>
                    <p>lakjfldkjlajsdlkfjalskdfjlajflskdjflaksjflksjflkdj
                    jdflakjdlfkjasdlfjaslfjsdlkfjsdlfjsdlfkjslfjdalkfja
                    lajfladskjflsdjf</p>
                    <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>Courses</h4>
                    <p>
                    lakjfldkjlajsdlkfjalskdfjlajflskdjflaksjflksjflkdj
                    jdflakjdlfkjasdlfjaslfjsdlkfjsdlfjsdlfkjslfjdalkfja
                    lajfladskjflsdjf</p>
                    <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p>

                </div>
                </div>

            </div>
              </div>

              </div>
              </div>
          
          
        )
    }
}