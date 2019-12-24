import React from 'react';
import './projectsbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                <div class = "container">
                    <div class = "row">
                        <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            
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