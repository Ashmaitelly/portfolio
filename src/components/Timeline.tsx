import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2026 - Present"
            iconStyle={{ background: "#2563eb", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              React Native Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Koein, Beirut
            </h4>
            <p>Mobile App Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2026"
            iconStyle={{ background: "#2563eb", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              React Native Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">ITXI, Beirut</h4>
            <p>Mobile App Development, DevOps & Automation, Testing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: "#2563eb", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tech Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MEC Tech, Bourj Hammoud
            </h4>
            <p>Web Development, Mobile Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021"
            iconStyle={{ background: "#2563eb", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              B.S. in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Haigazian University
            </h4>
            <p>Software Engineering Foundations, Problem Solving</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
