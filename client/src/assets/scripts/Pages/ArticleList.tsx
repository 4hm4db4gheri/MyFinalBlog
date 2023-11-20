import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ArticleItem } from "../Components/ArticleItem";

// const currentUrl = window.location.href;

interface PostData {
	Title: string;
	Date: string;
	TimeSpent: string;
	Content: string;
	ImageSrc: string;
}

export function Posts() {
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
				return (
					<ArticleItem
						key={post.Date}
						Title={post.Title}
						Content={post.Content}
						Date={formatDate(post.Date)}
						TimeSpent={post.TimeSpent}
						ImageSrc={post.ImageSrc}
					/>
				);
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
