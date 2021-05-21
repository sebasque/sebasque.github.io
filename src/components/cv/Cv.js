import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import './Cv.scss';

export default function Cv() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
    const cvPath = require('../../res/cv.md');

    fetch(cvPath)
      .then(response => response.text())
      .then(text => {
        setMarkdown(text)
      });
  }, [])

  return (
    <div className='cv container'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}