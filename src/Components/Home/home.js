import React from 'react';
import pic_me from './pic_me.jpg';
import './home.css';
import this_me from './ThisIsMe.png';

export class Home extends React.Component{

    render(){
        return (
            <div className="Home">
                <div className="Home-picture">
                    <img className = "Home-me" src={this_me} alt=''></img>
                    <img className = "Home-pic" src={pic_me} alt=''></img>
                    
                </div>
                <div>
                    <h1>hi i'm shirley and here is my page where i do stuff and post it</h1>
                </div>

            </div>
        )
    }


}

export default Home;