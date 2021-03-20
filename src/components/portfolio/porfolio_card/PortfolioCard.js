import React from 'react';
import './PortfolioCard.scss'

function PortfolioCard(props) {
  return (
    <div className="card portfolio-card" onClick={props.onClick}>
      <div className={props.active ? "card-body-active" : "card-body"}>
        <h4 className="card-title">{props.info.title}</h4>
        </div>
    </div>
  )
}

export default PortfolioCard

