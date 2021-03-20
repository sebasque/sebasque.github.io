import React from 'react'
import './PortfolioDetail.scss'

export default function PortfolioDetail(props) {  

  return (
    <div className='portfolio-detail'>
      <div>
        <h2 class="portfolio-subheading">Description</h2>
        <p class="portfolio-p">{props.info.description}</p>
        {
          props.info.images.map(img => {
            return <img class={props.info.platform === "mobile" ? "img-fluid img-mobile" : "img-fluid img-regular"} src={require('../../../res/img/portfolio/' + img)} alt="Project example"/>
          })
        }
        <h2 class="portfolio-subheading">Tech</h2>
        <ul>
          {
            props.info.tech.map(item => {
              return <li>{item}</li>
            })
          }
        </ul>
        <h2 class="portfolio-subheading">Impact</h2>
        <p class="portfolio-p">{props.info.impact}</p>
      </div>
      <div>
        {props.info.app !== "" &&
        <a class="button" href={props.info.app} target="_blank" rel="noopener noreferrer">App</a>
        } 
        {props.info.github !== "" &&
          <a class="button" href={props.info.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        }
        {props.info.youtube !== "" &&
          <a class="button" href={props.info.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        }
      </div>
    </div>
  )
}

