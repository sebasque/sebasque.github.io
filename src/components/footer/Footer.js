import React from 'react';
import './Footer.scss';
import reactIcon from '../../res/img/react.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex-footer">
          <p>&copy; Michael Koohang | {new Date().getFullYear()}</p>
          <img className="react-logo" src={reactIcon} alt="React" />
        </div>
      </div>
    </footer>
  )
}
