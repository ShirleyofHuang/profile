import React from 'react';
import './projects.css';

export class Projects extends React.Component{

    render(){
        return (
            <div className="Projects">
                <div className="Projects-image">
                    <img src={this.props.image} alt='' width="100" height="150"></img>
                    <div className="Projects-title">
                        {this.props.title}
                    </div>
                    <div className="Projects-quick-summary">
                        {this.props.summary}
                    </div>
                </div>
                

            </div>
        )

    }
}

export default Projects;