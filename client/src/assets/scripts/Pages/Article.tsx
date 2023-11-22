import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/index.scss";
import "../../styles/reset.scss";

export function Article() {
	// Use the useLocation hook to access the location state
	const location = useLocation();
	const { Title, Date, TimeSpent, Content, ImageSrc } = location.state || {};
	console.log(location.state);
	
	return (
		<>
			<header className="post-header">
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
			<body>
				<h1>{Title}</h1>
				<div>
					<img
						className="img-header"
						src="assets/images/developer-high-resolution-logo.png"
					/>
					<span>
						<h3>Ahmad Bagheri</h3>
					</span>
					<span>
						<p>{Date}</p>
					</span>
					<span>
						<i className="fa-solid fa-book-open"></i>
					</span>
					<span>
						<p>{TimeSpent}</p>
					</span>
				</div>
			</body>
		</>
	);
}
