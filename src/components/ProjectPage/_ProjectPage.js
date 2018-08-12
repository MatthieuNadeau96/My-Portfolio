import React, { Component } from 'react';

import ProjectCard from './ProjectCard';

class ProjectPage extends Component {

  render() {
    return (
      <div className="project-section">
        <ProjectCard
          cardTitle="Calculator"
          cardInfo="A calculator application. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
        <ProjectCard
          cardTitle="Movie Search"
          cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
        <ProjectCard
          cardTitle="Dictionary App"
          cardInfo="User can search for words using an api. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
        <ProjectCard
          cardTitle="Weather Application"
          cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl.. Using openweathermap api, the user can see the weather for whatever area they choose."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
        />
      </div>
    );
  }

}

export default ProjectPage;
