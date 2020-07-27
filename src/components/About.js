import React from 'react';
import profilePicture from '../res/img/profile-pic.jpeg';
import workData from '../res/data/work.json';
import skillsData from '../res/data/skills.json';
import { Link } from 'react-router-dom';
import WorkCard from './WorkCard'
import SkillBadge from './SkillBadge';
import './About.css'

function About(props) {
  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img class="img-fluid" src={profilePicture} alt="Michael Koohang" />
            </div>
            <div id="about-description" class="col-md-8">
              <h1>Hello! <span role="img" aria-label="Smile and wave emojis">😁👋🏻</span></h1>
              <hr />
              <p class="intro-text">
                My name is Michael Koohang and I'm a computer science graduate student at Georgia Tech.
                I'm specializing in Human-Computer Interaction, and my research focuses on creating
                mobile and full-stack applications for civic environments and data collection.
                        </p>
              <p class="intro-text">
                I'm an engineer by trade and a designer at heart. I love using the technologies
                around me to improve people's lives, and I see it as an obligation to do so with
                the computing and design skills I've acquired in my studies.
                        </p>
              <p class="intro-text">
                I also love playing soccer and sketching in my free time, as well as running
                and exercising every chance I get. My obsessions include music, Harry Potter,
                and my work (of course).
                        </p>
              <hr />
              <blockquote class="blockquote">
                <p class="mb-0">
                  Coding is secondary. It's the people you code for
                  that matter the most.
                            </p>
                <footer class="blockquote-footer">Michael Koohang</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div id="my-work-header">
            <h1><i class="fas fa-code-branch"></i> My Work</h1>
            <div id="work-button-container">
              <Link class="btn" to="/portfolio" onClick={props.onClick}>Porfolio <i class="fab fa-codepen"></i></Link>
              <a class="btn" href={require('../res/docs/michael-koohang-resume.pdf')} download="michael-koohang-resume.pdf">
                Resume <i class="fas fa-file-download"></i>
              </a>
            </div>
          </div>
          <p id="my-work-text">
            I've had the privilege of volunteering, working, and earning scholarships at some awesome
            places...
          </p>
          <div class="row row-cols-2 row-cols-lg-3">
            {
              workData.work.map(work => (
                <WorkCard info={work}></WorkCard>
              ))
            }            
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <h1><i class="fas fa-tools"></i> My Skills</h1>
          <div class="row">
            <div class="col-lg-4 mt-4">
              <h4><i class="far fa-file-code"></i> Languages</h4>
              <p class="mt-4">
                {
                  skillsData.languages.map(lang => (
                    <SkillBadge name={lang.name} stars={lang.stars}></SkillBadge>
                  ))
                }
              </p>
            </div>
            <div class="col-lg-4 mt-4">
              <h4><i class="fab fa-stack-overflow"></i> Foundations</h4>
              <p class="mt-4">
                {
                  skillsData.foundations.map(foundation => (
                    <SkillBadge name={foundation.name} stars={foundation.stars}></SkillBadge>
                  ))
                }
              </p>
            </div>
            <div class="col-lg-4 mt-4">
              <h4><i class="fab fa-sketch"></i> Software</h4>
              <p class="mt-4">
                {
                  skillsData.software.map(software => (
                    <SkillBadge name={software.name} stars={software.stars}></SkillBadge>
                  ))
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default About;