import React, { Component } from 'react';

import ProjectCard from './ProjectCard';

class ProjectPage extends Component {

  render() {
    return (
      <div className="project-section">
        <ProjectCard
          cardTitle="Calculator"
          cardInfo="A calculator application"
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
        <ProjectCard
          cardTitle="Movie Search"
          cardInfo="An application that allows the user to search for movies using a movie database api."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
        <ProjectCard
          cardTitle="Dictionary App"
          cardInfo="User can search for words using an api."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
        <ProjectCard
          cardTitle="Weather Application"
          cardInfo="Using openweathermap api, the user can see the weather for whatever area they choose."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
      </div>
    );
  }

}

export default ProjectPage;
