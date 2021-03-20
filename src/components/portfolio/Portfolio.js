import React, { useState } from 'react';
import PortfolioDetail from './portfolio_detail/PortfolioDetail';
import PortfolioCard from './porfolio_card/PortfolioCard';
import portfolioData from '../../res/data/portfolio.json';
import './Portfolio.scss';

function Portfolio() {
  const [currentProject, setCurrentProject] = useState(portfolioData.portfolio[0]);

  return (
    <div className='portfolio'>
      <div class="container">
        <div id="project-list">
          {
            portfolioData.portfolio.map(project => (
              <PortfolioCard 
                info={project} 
                active={project.title === currentProject.title} 
                onClick={() => setCurrentProject(project)}
              >
              </PortfolioCard>
            ))
          }            
        </div>
        <hr/>
        <PortfolioDetail info={currentProject}/>
      </div>    
    </div>
  );
}

export default Portfolio;
