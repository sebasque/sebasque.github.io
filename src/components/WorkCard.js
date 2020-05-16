import React from 'react';
import './WorkCard.css';

function WorkCard(props) {
  return (
    <div class="col mt-2">
      <div class="card my-work-card">
        <img src={require("../res/img/work/" + props.info.img)} class="card-img-top img-fluid" alt={props.info.alt} />
        <div class="card-body">
          <h5 class="card-title">{props.info.title}</h5>
          <h6 class="card-subtitle badge my-work-badge">{props.info.type}</h6>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
