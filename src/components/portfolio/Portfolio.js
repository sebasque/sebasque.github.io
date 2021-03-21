import React, { useEffect } from 'react';
import { map } from 'lodash';
import Project from './project/Project';
import projects from '../../res/projects.json';
import './Portfolio.scss';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className='portfolio'>
      <div className='project-list container'>
        {
         map(projects, project => (
            <Project project={project} />
         ))
        }
      </div>    
    </div>
  );
}
