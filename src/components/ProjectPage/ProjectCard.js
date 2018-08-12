import React, { Component } from 'react';

class ProjectCard extends Component {

  render() {
    return (
      <div className="project-card">
        <p className="card-title">{this.props.cardTitle}</p>
        <p className="card-info">{this.props.cardInfo}</p>
        <div className="card-tool-container">
          <ul className="card-tools">
            { this.props.tools.map(tool => <li key={tool}>{tool}</li>) }
          </ul>
        </div>
        <div className="card-btns">
          <button className="btn-live">Live Demo</button>
          <button className="btn-github">Github</button>
        </div>

      </div>
    );
  }

}

export default ProjectCard;
