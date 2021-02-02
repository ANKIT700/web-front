import React from "react";
import profilepic from "../../assets/images/profile.png";
import "./Home.css";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <div style={{ display: "flex" }} className="homeSection">
      <div className="left">
        <img src={profilepic} />
        <br />
        <b className="name">ANKIT PARASHAR</b>
        <br />
        <span>
          <b>(Software Developer)</b>
          <br />
          <i>Sr. React Developer</i>
        </span>
        <br />
        <HashLink smooth to="#Professional Summary">
          Professional Summary
        </HashLink>
        <br />
        <HashLink smooth to="#Skills">
          Skills
        </HashLink>
        <br />
        <HashLink smooth to="#Work Experience">
          Work Experience
        </HashLink>
        <br />
        <HashLink smooth to="#Education">
          Education
        </HashLink>
        <br />
        <HashLink smooth to="#Hobbies and Interests">
          Hobbies and Interests
        </HashLink>
        <br />
      </div>
      <div className="right">
        <div className="content">
          <div id="Professional Summary">
            <h3>Professional Summary</h3>
            <p>
              {" "}
              Experienced software engineer with a passion for developing
              innovative programs that expedite the efficiency and effectiveness
              of organizational success. Well-versed in technology and writing
              code to create systems that are reliable and user-friendly.
              Skilled leader who has the proven ability to motivate, educate,
              and manage a team of professionals to build software programs and
              effectively track changes. Confident communicator, strategic
              thinker, and innovative creator to develop software that is
              customized to meet a company’s organizational needs, highlight
              their core competencies, and further their success.
            </p>
          </div>
          <div id="Skills">
            <h3>Skills</h3>
            <p>
              Well-versed in software tools including HTML, JavaScript, CSS,
              BackBone and JQuery, among others. -Skilled at reading and writing
              code using viable inputs and outputs after accurate assessment of
              pre- and post-conditions. -Experienced at designing unit tests to
              measure the effectiveness of software programs, backend services,
              and user interfaces. -Confident problem-solving abilities to
              overcome glitches with creative solutions that are strategically
              designed to last long-term. -Strong communication skills and the
              ability to listen carefully to user feedback to determine
              modifications for optimal user-function.
            </p>
          </div>
          <div id="Work Experience">
            <h3>Work Experience</h3>
            <p>
              Software Engineer-April 2013 – present Company Name Developed and
              designed three critical software programs for financial tracking
              and reporting. Optimized user effectiveness by creating a detailed
              feedback queue for users to discuss functionality, convenience,
              and effectiveness. Oversee a team of four software developers and
              lead weekly discussions to brainstorm ideas in software
              development and to track changes made in existing programs.
            </p>
            <p>
              {" "}
              Software Developer-February 2008 – April 2013 Company Name
              Participated in creating scalable systems for three primary
              departments, including human resources, marketing, and supply
              chain. Ran monthly unit tests to determine software effectiveness
              and mend broken links or glitches in the system. Gave quarterly
              reports to executive management regarding current developments,
              and tracked changes in existing software.
            </p>
            <p>
              Associate Engineer – Estes Corp.February 2011 – April 2013
              Maintained a system for documenting code and keeping track of
              software developments. Researched primary technological
              developments to determine whether implementation into
              organizational processes was efficient and feasible. Participated
              in strengthening the company’s backend services to optimize usage
              and prepare for emergency blackouts.
            </p>
            <p>
              {" "}
              Software Engineer Intern-February 2010 – February 2011 Estes Corp.
              Researched best practices to share with fellow software team
              members. Helped write code for a website update using HTML tools.
              Presented to management an end-of-term demonstration on valuable
              software developments that were in the works.
            </p>
          </div>
          <div id="Education">
            <h3>Education</h3>
            <p>
              {" "}
              Internship2010-2011 Estes Corp.City, State Bachelor of Science in
              Computer Engineering2010 University of UtahCity, State
            </p>
          </div>
          <div id="Hobbies and Interests">
            <h3> Hobbies and Interests</h3>
            <p>
              {" "}
              I enjoy volunteering weekly at the local Boys and Girls club where
              I teach youth how to write code. I am an animal lover and enjoy
              frequent horseback trips with my family. I also appreciate a good
              book or tennis match.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
