import React from "react";
import "./Timeline.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  return (
    <div>

        <section id="timeline" className="timeline-sections">
          <div>
            <div className="timeline-container">
              <div className="timeline-tabs">
                <div className="timeline-button">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="timeline-icon"
                  />{" "}
                  Education
                  <hr />
                </div>
                <div className="timeline-button">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="timeline-icon"
                  />{" "}
                  Experience
                  <hr />
                </div>
              </div>
              <div className="timeline-sections">
                <div className="timeline-content">
                  <div className="timeline-data">
                    <div className="timeline-text1">
                      <h3 className="timeline-title">Full Stack Developemnt</h3>
                      <span className="timeline-subtitle">Code To Inspire</span>
                      <div className="timeline-calender">
                        <FontAwesomeIcon icon={faCalendarDays} /> 2022 - Present
                      </div>
                    </div>
                    <div>
                      <span className="timeline-rounder"></span>
                      <span className="timeline-line"></span>
                    </div>
                  </div>
                  <div className="timeline-data">
                    <div></div>
                    <div>
                      <span className="timeline-rounder"></span>
                      <span className="timeline-line"></span>
                    </div>
                    <div>
                      <h3 className="timeline-title">Administrative Officer</h3>
                      <span className="timeline-subtitle">
                        BSDO organization
                      </span>
                      <div>
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="uil uil-calender-alt"
                        />{" "}
                        2023 - Present
                      </div>
                    </div>
                  </div>
                  <div className="timeline-data">
                    <div className="timeline-text1 software">
                      <h3 className="timeline-title">Software Engineering </h3>
                      <span className="timeline-subtitle">
                        Herat university
                      </span>
                      <div className="timeline-calender">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="uil uil-calender-alt"
                        />{" "}
                        2022 - Present
                      </div>
                    </div>
                    <div>
                      <span className="timeline-rounder"> </span>
                      <span className="timeline-line"></span>
                    </div>
                  </div>
                  <div className="timeline-data">
                    <div></div>
                    <div>
                      <span className="timeline-rounder"> </span>
                      <span className="timeline-line"></span>
                    </div>
                    <div>
                      <h3 className="timeline-title">Computer Teacher</h3>
                      <span className="timeline-subtitle">
                        Rasalat high school
                      </span>
                      <div className="timeline-calender">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="uil uil-calender-alt"
                        />{" "}
                        2022 - 2023
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-data">
                    <div className="timeline-text1 english">
                      <h3 className="timeline-title">English language</h3>
                      <span className="timeline-subtitle">TOEFL Academy</span>
                      <div className="timeline-calender">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="uil uil-calender-alt"
                        />{" "}
                        2019 - 2021
                      </div>
                    </div>
                    <div>
                      <span className="timeline-rounder"> </span>
                      <span className="timeline-line"></span>
                    </div>
                  </div>
                  <div className="timeline-data">
                    <div></div>
                    <div>
                      <span className="timeline-rounder"> </span>
                      <span className="timeline-line"></span>
                    </div>
                    <div>
                      <h3 className="timeline-title">English Instructor</h3>
                      <span className="timeline-subtitle">TOEFL Academy</span>
                      <div className="timeline-calender">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="uil uil-calender-alt"
                        />{" "}
                        2021 - 2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </div>
  );
};
export default Timeline;
