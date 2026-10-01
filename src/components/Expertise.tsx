import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React Native",
  "iOS",
  "Android",
  "Firebase",
  "TypeScript",
  "JavaScript",
  "Redux",
];

const labelsSecond = [
  "React",
  "Node.js",
  "Express",
  "Redux",
  "HTML",
  "CSS",
  "SQL",
];

const labelsThird = ["Jest", "Bitbucket", "Git", "Jira", "Confluence"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faMobileScreenButton} size="3x" />
            <h3>Mobile App Development</h3>
            <p>
              I build and maintain cross-platform mobile apps for Android and
              iOS using React Native. I have strong proficiency in the SDLC
              process and mobile app development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Web Development</h3>
            <p>
              I have built web applications using modern technologies such as
              React and Node.js. I have a strong proficiency in frontend and
              backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
            <h3>Testing & DevOps</h3>
            <p>
              I write unit and end-to-end tests and set up CI/CD pipelines to
              automate app deployment, working in agile teams alongside version
              control tools.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
