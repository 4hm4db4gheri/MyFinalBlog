import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/reset.scss";
import "../../styles/article.scss"

export function Article() {
	// Use the useLocation hook to access the location state
	const location = useLocation();
	const { Title, Date, TimeSpent, Content } = location.state || {};
	console.log(location.state);

	return (
		<>
			<header className="article-header">
				<div>
					<div>
						<Link to="/">
							<i className="fa-solid fa-angle-left fa-xl"></i>
						</Link>
						<div>
							<Link to="/">
								<img
									className="img-header"
									src="assets/images/developer-high-resolution-logo.png"
								/>
								<span>
									<h3>Ahmad Bagheri</h3>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</header>
			<body className="article-body">
				<h1 className="article-title">{Title}</h1>
				<div className="article-information">
					<img
						className="img-header"
						src="assets/images/developer-high-resolution-logo.png"
					/>
					<span>
						<h3>Ahmad Bagheri</h3>
					</span>
					<span>
						<p>  {Date}</p>
					</span>
					<span>
						<i className="fa-solid fa-book-open"></i>
					</span>
					<span>
						<p>  {TimeSpent}</p>
					</span>
				</div>
				<div className="article-content">
					<h1>{Title}</h1>
					<p>{Content}</p>
				</div>
				<div className="article-footer">
					<h3>Written by</h3>
					<div>
						<div>
							<span>
								<img
									className="img-header"
									src="assets/images/developer-high-resolution-logo.png"
								/>
							</span>
							<span>

								<p className="writer">Ahmad Bagheri</p>
								<p className="writer-info">Junior Developer, Gamer, Student at SBU</p>

							</span>
						</div>
						<div>

						</div>
					</div>
				</div>
			</body>
		</>
	);
}
