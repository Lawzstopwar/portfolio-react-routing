import React from "react";

function Project(props) {
  return (
    <div class="card m-3" style={{
      width: "400px"
    }}>
      <img class="card-img-top" src={props.image} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.github_link}</p>
          <a href="#" class="btn btn-primary">{props.deployed_link}</a>
        </div>
    </div>
  );
}

export default Project;
