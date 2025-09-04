import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi Everyone, I M@njit</h2>
        <div className="prompt">
          <p>
            Full-Stack Developer, <br />
            Building Tomorrow’s Solutions with Today’s Code
          </p>
          {/* Social Icons with links */}
          <a
            href="https://www.linkedin.com/in/manjit-kumar-852278294"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Manjit559"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a href="mailto:memanjitofficial@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Technical Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Programming Languages</h2>
            <span>
           Java,Python,SQL
            </span>
          </li>
          <li className="item">
            <h2>Framwork & tools</h2>
            <span>
             React.js,Node.js,Next.js,Express.js, Pandas, numpy ,Git, postman, vs code , jupyter            </span>
          </li>
          <li className="item">
            <h2>Soft Skills</h2>
            <span> Communication , Team work , Curiosity , Consistency </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
