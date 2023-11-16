import React from "react";
import "../styles/react.scss";
import "../styles/reset.scss";

type postProps = {
  Title: string;
  Date: string;
  TimeSpent: string;
  Content: string;
  ImageSrc: string;
};

function MyInfo(props: postProps) {
  return (
    <a href="#">
      <div className="div-component-react">
        <div className="div-component-text">
          <h1>
            <strong>{props.Title}</strong>
          </h1>
          <div className="">
            <span className="text-span-color">{props.Date} &nbsp;&nbsp;</span>
            <span>
              <i className="fa-solid fa-book-open"></i>
            </span>
            <span className="text-span-color">{props.TimeSpent}</span>
          </div>
          <p>{props.Content}</p>
        </div>
        <img src={props.ImageSrc} className="div-component-img" />
      </div>
    </a>
  );
}

export default MyInfo;
