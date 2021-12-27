import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import Project from './project/Project';
import './Portfolio.scss';

export default function Portfolio() {
  const [projects, setProjects] = useState({})
  useEffect(() => {
    window.scrollTo(0,0);
    fetchProjects()
  }, [])

  const fetchProjects = () => {
    let requestURL = "https://api.github.com/users/michaelkoohang/repos?sort=update&direction=desc&per_page=100"
    fetch(requestURL)
      .then(response => {
        if (response.status !== 200) {
          const projects = localStorage.getItem("portfolio")
          return projects
        }
        return response.json()
      })
      .then(projects => {
        localStorage.setItem("portfolio", projects);
        setProjects(projects)
      })
  }

  return (
    <div className='portfolio container'>
      <h2>Portfolio</h2>
        { projects.length > 0
          ? <div className='project-list'>
              {
                map(projects, (project, i) => (
                  <Project key={i} project={project} />
                ))
              }
            </div>    
          : <p className='projects-empty'>
              Sorry! Looks like there was a problem while loading my portfolio. You can still check out my <a href='https://github.com/michaelkoohang'>GitHub</a> to see what I'm working on :)
            </p>
        }
    </div>
  );
}
