import React, { Component } from 'react';
import projects from '../../shared/projects';

class Project extends Component {
  render() {
    return (
        <div id="project" className="gallery"> 
            {projects.map((item, key) => (
                <img src={item.image}></img>
            ))}     
            
      </div>
    );
  }
}

export default Project;