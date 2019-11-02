import React from 'react';
import Logo from '../Logo';
import Button from '../Button';

const Header: React.FC = () => (
    <div className="header">
        <Logo/>
        <div className="header__buttons">
            <Button>Log In</Button>
            <Button variant="outlined">Sign Up</Button>
        </div>
    </div>
);

export default Header;
