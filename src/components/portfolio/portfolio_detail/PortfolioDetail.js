import React from 'react'
import './PortfolioDetail.scss'

export default function PortfolioDetail(props) {  

  return (
    <div className='portfolio-detail'>
      <div>
        <h2 className="portfolio-subheading">Description</h2>
        <p className="portfolio-p">{props.info.description}</p>
        {
          props.info.images.map((img, i) => {
            return <img key={i} className={props.info.platform === "mobile" ? "img-fluid img-mobile" : "img-fluid img-regular"} src={require('../../../res/img/portfolio/' + img)} alt="Project example"/>
          })
        }
        <h2 className="portfolio-subheading">Tech</h2>
        <ul>
          {
            props.info.tech.map((item, i) => {
              return <li key={i}>{item}</li>
            })
          }
        </ul>
        <h2 className="portfolio-subheading">Impact</h2>
        <p className="portfolio-p">{props.info.impact}</p>
      </div>
      <div>
        {props.info.app !== "" &&
        <a className="button" href={props.info.app} target="_blank" rel="noopener noreferrer">App</a>
        } 
        {props.info.github !== "" &&
          <a className="button" href={props.info.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        }
        {props.info.youtube !== "" &&
          <a className="button" href={props.info.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        }
      </div>
    </div>
  )
}

