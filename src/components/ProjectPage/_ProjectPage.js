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
          cardInfo="One of my first projects learning React and handling state. Basic calculator functionality with shrinking text to allow for larger numbers."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/My-Calculator/"}
          ghLink={"https://github.com/MatthieuNadeau96/My-Calculator"}
        />
        <ProjectCard
          cardTitle="Math Quiz App"
          imageSrc={MathQuizPic}
          cardInfo="A simple math game. User has to guess wether or not the answer displayed is correct. The application also keeps track of the score"
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Math-Quiz-App/"}
          ghLink={"https://github.com/MatthieuNadeau96/Math-Quiz-App"}
          />
        <ProjectCard
          cardTitle="Dictionary App"
          imageSrc={DictionaryPic}
          cardInfo="User can search for words using an api. This particular api isn't secure so the user would have to allow it in the browser."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Dictionary-App/"}
          ghLink={"https://github.com/MatthieuNadeau96/Dictionary-App"}
          />
        <ProjectCard
          cardTitle="Movie Search"
          imageSrc={MovieSearchPic}
          cardInfo="This application uses an api to retrieve a list of movies based on the input provided."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Movie-Search-App/"}
          ghLink={"https://github.com/MatthieuNadeau96/Movie-Search-App"}
        />
        <ProjectCard
          cardTitle="Todo-List"
          imageSrc={TodoListPic}
          cardInfo="Simple Todo list application that allows the user to add and remove simple tasks."
          tools={["HTML", "CSS", "Javascript", "ES6", "React.js", "Node.js"]}
          liveLink={"https://matthieunadeau96.github.io/Todo-List/"}
          ghLink={"https://github.com/MatthieuNadeau96/Todo-List"}
        />
      </div>
    );
  }

}

export default ProjectPage;
