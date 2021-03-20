import React from 'react';
import {Link} from 'react-router-dom'
import './PortfolioCard.scss'

function PortfolioCard(props) {
  return (
    <Link onClick={props.onClick}>
      <div class="card portfolio-card">
        <div class={props.active ? "card-body-active" : "card-body"}>
          <h4 class="card-title">{props.info.title}</h4>
          </div>
      </div>
    </Link>
  )
}

export default PortfolioCard

