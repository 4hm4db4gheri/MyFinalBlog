import React from "react";
import "../../styles/react.scss";
import "../../styles/reset.scss";
import { Link } from "react-router-dom";

export function Article() {
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
					<div>Ahmad Bagheri</div>
				</div>
			</header>
		</>
	);
}
