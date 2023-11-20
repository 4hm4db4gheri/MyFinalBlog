import React from "react";
import "../../styles/react.scss";
import "../../styles/reset.scss";

export function Article() {
	return (
		<>
			<header className="post-header">
				<div>
					<div>
						<a href="index.html">
							<i className="fa-solid fa-angle-left fa-xl"></i>
						</a>
						<div>
							<a href="index.html">
								<img
									className="img-header"
									src="assets/images/developer-high-resolution-logo.png"
								/>
								<span>
									<h3>Ahmad Bagheri</h3>
								</span>
							</a>
						</div>
					</div>
					<div>Ahmad Bagheri</div>
				</div>
			</header>
		</>
	);
}
