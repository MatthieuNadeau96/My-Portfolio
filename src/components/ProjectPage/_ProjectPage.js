import React, { Component } from 'react';

import ProjectCard from './ProjectCard';

import CalculatorPic from '../../img/Calculator.png';
import DictionaryPic from '../../img/Dictionary.png';
import MathQuizPic from '../../img/MathQuiz.png';
import MovieSearchPic from '../../img/MovieSearch.png';
import TodoListPic from '../../img/TodoList.png';

class ProjectPage extends Component {

  render() {
    return (
      <div className="project-section">
        <div className="project-title">Projects</div>
        <div className="project-underline"/>
        <ProjectCard
          cardTitle="Calculator"
          imageSrc={CalculatorPic}
          cardInfo="A calculator application. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/My-Calculator/"}
          ghLink={"https://github.com/MatthieuNadeau96/My-Calculator"}
        />
        <ProjectCard
          cardTitle="Math Quiz App"
          imageSrc={MathQuizPic}
          cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl.. Using openweathermap api, the user can see the weather for whatever area they choose."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Math-Quiz-App/"}
          ghLink={"https://github.com/MatthieuNadeau96/Math-Quiz-App"}
          />
        <ProjectCard
          cardTitle="Dictionary App"
          imageSrc={DictionaryPic}
          cardInfo="User can search for words using an api. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Dictionary-App/"}
          ghLink={"https://github.com/MatthieuNadeau96/Dictionary-App"}
          />
        <ProjectCard
          cardTitle="Movie Search"
          imageSrc={MovieSearchPic}
          cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Movie-Search-App/"}
          ghLink={"https://github.com/MatthieuNadeau96/Movie-Search-App"}
        />
        <ProjectCard
          cardTitle="Todo-List"
          imageSrc={TodoListPic}
          cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar justo. Aliquam semper neque vitae tortor mollis, quis pharetra lacus porta. Maecenas sed nisl.. Using openweathermap api, the user can see the weather for whatever area they choose."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Todo-List/"}
          ghLink={"https://github.com/MatthieuNadeau96/Todo-List"}
        />
      </div>
    );
  }

}

export default ProjectPage;
