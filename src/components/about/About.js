import React from 'react';
import './About.scss'

export default function About() {
  return (
    <section>
      <div className='container'>
        <h1 className='hello'>Hello! <span role='img' aria-label='Wave hand emoji'>👋</span></h1>
        <p className='text'>
          My name is Michael Koohang, and I'm an incoming software engineer at Nike.
          My background is in Human-Computer Interaction and Software Engineering, and I
          build mobile and full-stack applications, mainly in iOS and React.
        </p>
        <p className='text'>
          I'm an engineer by trade and a designer at heart. I love using the technologies
          around me to improve people's lives, and I enjoy teaching computer science to others
          while making my own personal apps. I also love playing soccer, running, and exercising every 
          chance I get. My obsessions include music, movies, and my work.
        </p>
        <a className='button' href='#/cv'>CV</a>
        <a className='button' href='#/portfolio'>Portfolio</a>
      </div>
    </section>
  );
}