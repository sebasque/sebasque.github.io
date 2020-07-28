import React from 'react'
import './PortfolioDetail.css'
import iphone from '../res/img/portfolio/iphone.png';


function PortfolioDetail(props) {  

  return (
    <div>
      <div>
        <h5 class="portfolio-subheading">Description</h5>
        <p class="portfolio-p">{props.info.description}</p>

        {
          props.info.images.map(img => {
            return <img class={props.info.platform === "mobile" ? "img-fluid img-mobile" : "img-fluid img-regular"} src={require('../res/img/portfolio/' + img)}/>
          })
        }

        <h5 class="portfolio-subheading">Tech</h5>
        <ul>
          {
            props.info.tech.map(item => {
              return <li>{item}</li>
            })
          }
        </ul>

        <h5 class="portfolio-subheading">Impact</h5>
        <p class="portfolio-p">{props.info.impact}</p>

      </div>
      <div>
        {props.info.app !== "" &&
        <a class="btn" id="portfolio-btn" href={props.info.app} target="_blank">App <i class="fas fa-external-link-alt"></i></a>
        } 
        {props.info.github !== "" &&
          <a class="btn" id="portfolio-btn" href={props.info.github} target="_blank">GitHub <i class="fas fa-external-link-alt"></i></a>
        }
        {props.info.youtube !== "" &&
          <a class="btn" id="portfolio-btn" href={props.info.youtube} target="_blank">YouTube <i class="fas fa-external-link-alt"></i></a>
        }
      </div>
    </div>
  )
}

export default PortfolioDetail

