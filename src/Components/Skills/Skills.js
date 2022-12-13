import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-containeer">
      <h1 className="skills-heading">
        Some of my <span>Skills</span> are
      </h1>
      <div className="dashboard">
        <p>FRONT-END</p>
        <svg className="skill1">
          <circle className="bg" cx={57} cy={57} r={52} />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            font-size="30px"
            font-family="Arial"
            fill="white"
            dy=".3em"
            className="innertext"
          >
            80%
          </text>
          <circle className="meter-1" cx={57} cy={57} r={52} />
        </svg>
        <p>BACK-END</p>
        <svg className="skill2">
          <circle className="bg" cx={57} cy={57} r={52} />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            font-size="30px"
            font-family="Arial"
            fill="white"
            dy=".3em"
          >
            70%
          </text>
          <circle className="meter-2" cx={57} cy={57} r={52} />
        </svg>
        <p>REACT</p>
        <svg className="skill3">
          <circle className="bg" cx={57} cy={57} r={52} />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            font-size="30px"
            fill="white"
            font-family="Arial"
            dy=".3em"
          >
            90%
          </text>
          <circle className="meter-3" cx={57} cy={57} r={52} />
        </svg>
        <p>JAVASCRIPT</p>
        <svg className="skill4">
          <circle className="bg" cx={57} cy={57} r={52} />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            font-size="30px"
            fill="white"
            font-family="Arial"
            dy=".3em"
          >
            75%
          </text>
          <circle className="meter-4" cx={57} cy={57} r={52} />
        </svg>
      </div>
    </div>
  );
};

export default Skills;
