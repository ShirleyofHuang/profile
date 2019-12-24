import React from 'react';
import './projectsbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from './pythontreemap.png';


export class Projects extends React.Component{

    render(){
        return (
            <div className="ProjectsBox">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
                <div class ="container">
                    <div class ="row">
                        <div class="col-lg-8 col-md-8 col-sm-4 col-xs-3">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h3>Python Tree Map</h3>
                                    <p>Tree map using python made in csc148</p>
                                    <p><a href="#" class = "btn btn-primary" role ="button">Read More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="Projects-image">
                    {/* <img src={this.props.image} alt='' width="100" height="150"></img> */}
                        {/* {this.props.image}
                    <div className="Projects-title">
                        {this.props.title}
                    </div>
                    <div className="Projects-quick-summary">
                        {this.props.summary}
                    </div>
                </div> */} 
                

            </div>
        )

    }
}

export default Projects;