import React from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import errorImg from "./images/err/404-error.png";

import "./styles/err.css";

function Error() {
    return (
        <section className="err">
            <div className="err_oops">Oops!</div>
            <div className="err_title">404-PAGE NOT FOUND</div>
            <img className="err_img" src={errorImg} alt="Error 404" />
            <div className="err_info">The page you might be looking for might been<br></br>removed / name-changed / never existed</div>
            <Link to="/MyPortfolio-Pranav-N-Rao/" onClick={ScrollToTop} style={{ textDecoration: "none" }}><div className="err_btn">Go back to main page</div></Link>
        </section>
    )
}

export default Error;