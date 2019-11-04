import React from 'react';

// Styles
import './index.scss'

const Logo = ({primary} : {
    primary?: boolean
}) => <span className={
    `logo ${
        primary ? 'primary' : ''
    }`
}>Dreamshare</span>

export default Logo;
