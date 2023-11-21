import React from "react";
import "../../styles/react.scss";
import "../../styles/reset.scss";
import { Link } from "react-router-dom";

type postProps = {
	Title: string;
	Date: string;
	TimeSpent: string;
	Content: string;
	ImageSrc: string;
};

export function ArticleItem(props: postProps) {
	return (
		<Link to="/article">
			<div className="div-component-react">
				<div className="div-component-text">
					<h1>
						<strong>{props.Title}</strong>
					</h1>
					<h2>
						<strong>{props.Title}</strong>
					</h2>
					<div>
						<span className="text-span-color">
							<a className="date">
								{props.Date} &nbsp;&nbsp;
							</a>
						</span>
						<span>
							<i className="fa-solid fa-book-open"></i>
						</span>
						<span className="text-span-color">
							<a className="time-spent">
								{props.TimeSpent}
							</a>
						</span>
					</div>
					<p>{props.Content}</p>
				</div>
				<img src={props.ImageSrc} className="div-component-img" />
			</div>
		</Link>
	);
}
