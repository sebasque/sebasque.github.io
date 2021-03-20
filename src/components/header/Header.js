import React from 'react'
import profilePicture from '../../res/img/profile-pic.jpeg';
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="container header-flex">
        <div className='header-content'>
          <h1 className='name'>Michael Koohang</h1>
          <h4 className='subtitle'>Engineer | Designer | Athlete</h4>
          <div>
            <a href="https://www.youtube.com/channel/UC8t9zY7lkkljwFLSGw2qJzw" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube social-icon"></i>
            </a>
            <a href="https://github.com/michaelkoohang" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github social-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/michael-koohang-5611ba14a/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin social-icon"></i>
            </a>
            <a href="mailto:hello@michaelkoohang.com">
              <i class="fas fa-envelope social-icon"></i>
            </a>
          </div>
        </div>
        <a href='/'>
          <img className="profile-picture" src={profilePicture} alt="Michael Koohang" />
        </a>
      </div>
    </div>
  )
}