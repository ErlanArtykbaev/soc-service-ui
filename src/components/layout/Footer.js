import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="page-footer font-small blue bg-primary">

            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <NavLink to={'/'}> MDBootstrap.com</NavLink>
            </div>

        </footer>
);
};

export default Footer;