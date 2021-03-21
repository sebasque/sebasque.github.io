import React from 'react';
import { map } from 'lodash';
import Project from './project/Project';
import projects from '../../res/projects.json';
import './Portfolio.scss';

function Portfolio() {

  return (
    <div className='portfolio'>
      <div className="project-list container">
        {
         map(projects, project => (
            <Project project={project} />
         ))
        }
      </div>    
    </div>
  );
}

export default Portfolio;
