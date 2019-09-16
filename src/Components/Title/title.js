import React from 'react';
import './title.css';
const sortByOptions = {
    'home': 'Home',
    'about' : 'About Me',
    'projects': 'Projects',
    'connect' : 'Connect with me'

}
export class Title extends React.Component{
    renderSortByOptions(){
        
        return Object.keys(sortByOptions).map(sortByOption=>{
          let sortByOptionValue = sortByOptions[sortByOption]
          return <li key={sortByOptions}>{sortByOptionValue}</li>
        });
              
      }
      render(){
         return (
          <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-search">
            <div className="SearchBar-fields">
                <input placeholder="Search Me" />
                {/* <input placeholder="Where?" /> */}
            </div>
            <div className="SearchBar-submit">
                <a href='https://twitter.com/bunnybuddhism'>{this.props.enter}</a>
            </div>
            </div>
        </div>
         )
      }
  }
