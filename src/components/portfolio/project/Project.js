import React from 'react';
import './Project.scss'

export default function Project(props) {
  return (
    <a className='project-link' href={props.project.html_url} target='_blank' rel='noopener noreferrer'>
      <div className='project'>
        <h1 className='title'>{props.project.name.toLowerCase()}</h1>
        <p className='info'>{props.project.description}</p>
        <div className='tech-gradient'>
          <p className='tech'>
            {props.project.language}
          </p>
        </div>
      </div>
    </a>
  )
}
