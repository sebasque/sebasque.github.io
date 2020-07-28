import React, { useState } from 'react';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';
import portfolioData from '../res/data/portfolio.json';
import PortfolioDetail from './PortfolioDetail';

function Portfolio(props) {

  const [currentProject, setCurrentProject] = useState(portfolioData.portfolio[0]);

  return (
    <div>
      <section>
        <div class="container">
          <div id="project-list">
            {
              portfolioData.portfolio.map(project => (
                <PortfolioCard info={project} active={project.title === currentProject.title} onClick={() => setCurrentProject(project)}></PortfolioCard>
              ))
            }            
          </div>
          <hr/>
          <PortfolioDetail info={currentProject}/>
        </div>    
      </section>
      
    </div>
  );
}

export default Portfolio;
