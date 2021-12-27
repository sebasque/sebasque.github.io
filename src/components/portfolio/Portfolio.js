import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import Project from './project/Project';
import { LinearProgress, Fade, Zoom } from '@mui/material';
import './Portfolio.scss';

export default function Portfolio() {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
    fetchProjects()
  }, []);

  const fetchProjects = () => {
    let requestURL = "https://api.github.com/users/michaelkoohang/repos?sort=pushed&direction=desc&per_page=100"
    setLoading(true)
    fetch(requestURL)
      .then(response => {
        if (response.status !== 200) { return localStorage.getItem("portfolio") }
        return response.json();
      })
      .then(projects => {
        localStorage.setItem("portfolio", projects);
        setTimeout(() => {
          setProjects(projects);
          setLoading(false);
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        setTimeout(() => {
          setProjects({});
          setLoading(false);
        }, 2000);
      })
  }

  return (
    <div className='portfolio container'>
      <h2>Portfolio</h2>
      { loading &&
        <Fade in={loading}>
          <div className='loading-indicator'>
            <LinearProgress/>
            <p>Loading...</p>
          </div>
        </Fade>
      }
      <Zoom in={!loading}>
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
      </Zoom>
    </div>
  );
}
