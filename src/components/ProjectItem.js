import React from "react";

function ProjectItem({ id, name, about, technologies }) {

  const technologiesElements = technologies.map((x) => {
    return <span key={x}>{x}</span>
  });
  return (
    <div key={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesElements}
      </div>
    </div>
  );
}

export default ProjectItem;
