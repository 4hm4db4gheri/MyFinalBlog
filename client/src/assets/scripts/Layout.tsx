import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/index.scss";
import "../styles/reset.scss";

export function Layout() {
    return (
        <>
        <Outlet/>
            <footer className="footer">
                <div>
                    <p>©2023 Ahmad Bagheri</p>
                </div>
            </footer>
        </>
    );
}
