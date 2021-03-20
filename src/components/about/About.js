import React from 'react';
import './About.scss'

export default function About() {
  return (
    <div>
      <section>
        <div class="container">
          <h1 className='hello'>Hello! <span role="img" aria-label="Smile and wave emojis">👋</span></h1>
          <p class="text">
            My name is Michael Koohang and I'm an incoming software engineer at Nike.
            My background is in Human-Computer Interaction and Software Engineering, and I
            build mobile and full-stack applications, mainly in iOS and React.
          </p>
          <p class="text">
            I'm an engineer by trade and a designer at heart. I love using the technologies
            around me to improve people's lives, and I see it as an obligation to do so with
            the computing and design skills I've acquired in my studies. I also love playing 
            soccer and running and exercising every chance I get. My obsessions include music, 
            Harry Potter, and my work (of course).
          </p>
          <a className='button' href='/cv'>CV</a>
          <a className='button' href='/portfolio'>Portfolio</a>
        </div>
      </section>

    </div>

  );
}