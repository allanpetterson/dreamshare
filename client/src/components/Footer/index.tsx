import React from 'react';

// Contants
import {footerData} from '../../constants/Data';

// Components
import Logo from '../Logo';

// Styles
import './index.scss';

const Footer = () => {
    return (
        <div className="footer">
            <Logo primary/>
            <div className="footer__links-container">
                <span className="footer__links-title">Company</span>
                <div className="footer__links">
                    {
                    footerData.map((link) => <span className="footer__link">
                        {link}</span>)
                } </div>
            </div>
        </div>
    );
}

export default Footer;
