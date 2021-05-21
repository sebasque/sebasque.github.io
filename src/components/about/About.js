import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './About.scss'

export default function About() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
    const aboutPath = require('../../res/about.md');

    fetch(aboutPath)
      .then(response => response.text())
      .then(text => {
        setMarkdown(text)
      });
  }, [])

  return (
    <section>
      <div className='container'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
        <a className='button' href='#/cv'>CV</a>
        <a className='button' href='#/portfolio'>Portfolio</a>
      </div>
    </section>
  );
}