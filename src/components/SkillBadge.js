
import React from 'react';
import './SkillBadge.css'

function SkillBadge(props) {

  var starCount = 5;
  var stars = [];

  for (var i = 1; i <= props.stars; i++) {
    stars.push(<i class="fas fa-star"></i>)
    starCount--;
  }

  if (starCount > 0) {
    for (var j = 1; j <= starCount; j++) {
      stars.push(<i class="far fa-star"></i>)
    }
  }

  return (
    <span class="badge badge-pill my-skills-badge">{props.name}
      <span class="badge badge-pill badge-star">
        {stars}
      </span>
    </span>
  );
}

export default SkillBadge;