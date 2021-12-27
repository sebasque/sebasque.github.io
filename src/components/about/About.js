import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function About() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
    const aboutPath = require('./about.md');

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
      </div>
    </section>
  );
}