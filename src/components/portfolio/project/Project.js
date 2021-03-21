import React from 'react';
import { map } from 'lodash';
import './Project.scss'

export default function Project(props) {
  return (
    <a className='project-link' href={props.project.link} target='_blank' rel='noopener noreferrer'>
      <div className='project'>
        <h1 className='title'>{props.project.title}</h1>
        <p className='info'>{props.project.info}</p>
        <div className='tech-container'>
          {
            map(props.project.tech, tech => (
              <div className='tech-gradient'>
                <p className='tech'>
                  {tech}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </a>
  )
}
