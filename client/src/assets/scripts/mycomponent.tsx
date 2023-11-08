import React from "react";
import "../styles/react.scss";
import "../styles/reset.scss";

function MyInfo() {
  return (
    <a href="#">
      <div className="div-component-react">
        <div className="div-component-text">
          <h1>
            <strong>List of Moodle Install Guides</strong>
          </h1>
          <div className="article_detales">
            <span className="text-span-color">Sep 24, 2023 &nbsp;&nbsp;</span>
            <span>
              <i className="fa-solid fa-book-open"></i>
            </span>
            <span className="text-span-color">1 min read</span>
          </div>
          <p>
            https://www.howtoforge.com/how-to-install-moodle-on-ubuntu-22-04/
            https://docs.moodle.org/402/en/Step-by-step_Installation_Guide_for_Ubuntu
            https://docs.moodle.org/402/en/Step-by-step_Installation_Guide_for_Ubuntu
            https://docs.moodle.org/402/en/Step-by-step_Installation_Guide_for_Ubuntu
            https://docs.moodle.org/402/en/Step-by-step_Installation_Guide_for_Ubuntu
            https://docs.moodle.org/402/en/Step-by-step_Installation_Guide_for_Ubuntu
          </p>
        </div>
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1683525313231/RC4cg5koq.png?w=1600&h=840&fit=crop&crop=entropy&auto=format&auto=compress,format&format=webp"
          className="div-component-img"
        />
      </div>
    </a>
  );
}

export default MyInfo;
