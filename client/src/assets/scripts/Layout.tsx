import React from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <header className="fpage-header">
                <div className="logo-header">
                    <a href="index.html">
                        <img
                            className="img-header"
                            src="assets/images/developer-high-resolution-logo.png"
                        />
                        <span>
                            <h2>Ahmad Bagheri</h2>
                        </span>
                    </a>
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
                <div id="list" className="posts-list">
                    <Outlet />
                </div>
            </div>
            <footer className="footer">
                <div>
                    <p>©2023 Ahmad Bagheri</p>
                </div>
            </footer>
        </>
    );
}
