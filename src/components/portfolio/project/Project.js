import React from 'react';
import './Project.scss'

export default function Project(props) {
  return (
    <a className='project-link' href={props.project.html_url} target='_blank' rel='noopener noreferrer'>
      <div className='project'>
        <div className='project-primary-info'>
          <h1 className='title'>{props.project.name.toLowerCase()}</h1>
          <p className='info'>{props.project.description}</p>
        </div>
       <div className='project-secondary-info'>
          <p className='tech'>
            {props.project.language}
          </p>
          <p className='updated'>
            Updated: {new Date(props.project.pushed_at).toLocaleDateString()}
          </p>
       </div>
      </div>
    </a>
  )
}
