import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css"
const Footer = () => {
    return (
        <>
            <footer className="footerWrapper">
                <div className="contact-short">
                    <div >
                        MADE WITH ❤️ BY ROHIT
                    </div>
                </div>

                <div className="footer">

                    <div className="link1">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <div className="link2">
                        <Link to="/contact">Contact</Link>
                        <Link to="/policy">Policy</Link>
                    </div>
                </div>

            </footer >
        </>
    );
};
export default Footer;
