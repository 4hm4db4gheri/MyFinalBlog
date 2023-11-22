import React, { useEffect, useState } from "react";
import { ArticleItem } from "../Components/ArticleItem";
import "../../styles/index.scss"
import "../../styles/reset.scss"
import { Link } from "react-router-dom";

interface PostData {
    Title: string;
    Date: string;
    TimeSpent: string;
    Content: string;
    ImageSrc: string;
}

function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
}

export function FirstPage() {

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
            <header className="fpage-header">
                <div className="logo-header">
                    <Link to="/">
                        <img
                            className="img-header"
                            src="assets/images/developer-high-resolution-logo.png"
                        />
                        <span>
                            <h2>Ahmad Bagheri</h2>
                        </span>
                    </Link>
                </div>
                <div className="social-media-icons-div-header">
                    <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#">
                        <i className="fa-solid fa-earth-americas"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                        <i className="fa-solid fa-wifi"></i>
                    </a>
                </div>
                <nav className="nav-header">
                    <span>
                        <a className="nav-items">
                            <b>ahmad</b>
                        </a>
                    </span>
                    <span>
                        <a className="nav-items">bagheri</a>
                    </span>
                </nav>
            </header>
            <section className="personal-info">
                <img
                    className="img-main"
                    src="assets/images/developer-high-resolution-logo.png"
                />
                <span className="img-main-span">
                    <b>Ahmad Bagheri</b>
                </span>
                <span>SBU Student, Computer Engineer</span>
            </section>
            <div className="posts-list-background">
                <div className="posts-list">
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
                </div>
            </div>
        </>
    );
}
