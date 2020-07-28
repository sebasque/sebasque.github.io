import React from 'react';
import {Link} from 'react-router-dom'
import './PortfolioCard.css'

function PortfolioCard(props) {
  return (
    <Link onClick={props.onClick}>
      <div class="card portfolio-card">
        <div class={props.active ? "card-body-active" : "card-body"}>
          <h6 class="card-title">{props.info.title}</h6>
          </div>
      </div>
    </Link>
  )
}

export default PortfolioCard

