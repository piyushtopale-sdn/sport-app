import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
    return (
        <div
            className={`not-found d-flex flex-column flex-fill text-center justify-content-center `}
        >
            <div className="inner">
                <h2>404</h2>
                <h3>Page Not Found!</h3>
                <p>Oops! The page you were looking for doesn't exist.</p>
                <Link to="/" className="btn btn-primary">
                    Back to home
                </Link>
            </div>
        </div>
    );
}
export default NotFound;
