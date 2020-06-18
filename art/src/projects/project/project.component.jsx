import React, { Component } from 'react';
import projects from '../../shared/projects';
import '../project/project.styles.scss';


class Project extends Component {
  render() {
      return (
          <div id="project">
              
              <br></br>
              <h1>My Projects</h1>              
              <br></br>
              <div className="gallery"> 
                  {projects.map((item, key) => (
                      <div class="container">
                          <div class="middle">
                              <div class="text">{item.name}</div>
                        </div>
                        <img className="projectimage" src={item.image}></img>                    
                        
                    </div>
                
            ))}     
            
      </div>
    </div>
        
    );
  }
}

export default Project;