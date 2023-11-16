import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import MyInfo from "./fpageListComponent";

// const currentUrl = window.location.href;

interface PostData {
	Title: string;
	Date: string;
	TimeSpent: string;
	Content: string;
	ImageSrc: string;
}

function Posts() {
	const [posts, setPosts] = useState<PostData[]>([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/posts")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			})
			.catch((error) => {
				console.error("Error fetching posts:", error);
			});
	}, []);

	return (
		<>
			{posts.map((post) => {
				return <MyInfo
					key={post.Date}
					Title={post.Title}
					Content={post.Content}
					Date={formatDate(post.Date)}
					TimeSpent={post.TimeSpent}
					ImageSrc={post.ImageSrc}
				/>;
			})}
			<Outlet />
		</>
	);
}

function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = {
	  month: "short",
	  day: "numeric",
	  year: "numeric",
	};
	return new Date(dateString).toLocaleDateString("en-US", options);
}

ReactDOM.createRoot(document.getElementById("app")!).render(<Posts />);
