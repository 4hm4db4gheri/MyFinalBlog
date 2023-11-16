import React from "react";
import "../styles/react.scss";
import "../styles/reset.scss";

type postProps = {
  title: string;
  date: string;
  timeSpent: string;
  content: string;
  imageSrc: string;
  postID: string
};

function MyInfo(props: postProps) {
  return (
    <a href="#">
      <div className="div-component-react">
        <div className="div-component-text">
          <h1>
            <strong>{props.title}</strong>
          </h1>
          <div className="article_detales">
            <span className="text-span-color">{props.date} &nbsp;&nbsp;</span>
            <span>
              <i className="fa-solid fa-book-open"></i>
            </span>
            <span className="text-span-color">{props.timeSpent}</span>
          </div>
          <p>{props.content}</p>
        </div>
        <img src={props.imageSrc} className="div-component-img" />
      </div>
    </a>
  );
}

export default MyInfo;
