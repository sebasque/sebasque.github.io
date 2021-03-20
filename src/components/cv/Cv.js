import React, {useEffect, useState} from 'react';
import marked from "marked";
import './Cv.scss';

export default function Cv() {
  const [markdown, setMarkdown] = useState('');

    useEffect(() => {
      window.scrollTo(0,0);
      const privacyPath = require("../../res/docs/cv.md");

      fetch(privacyPath)
        .then(response => response.text())
        .then(text => {
          setMarkdown(marked(text))
        });
    }, [])

  return (
    <div className='cv container'>
      <div dangerouslySetInnerHTML={{__html: markdown}}></div>
    </div>
  )
}