import React from 'react';

// Styles
import './index.scss';

interface ButtonProps {
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium';
    color?: 'default' | 'primary';
    onClick?: () => void;
    children: any;
}

export const Button = ({
    variant = 'text',
    size = 'medium',
    color = 'default',
    onClick,
    children
} : ButtonProps) => {
    const smallClass = size === 'small' ? 'button--small' : '';
    const outlinedClass = variant === 'outlined' ? 'button--outlined' : '';
    const containedClass = variant === 'contained' ? 'button--contained' : '';
    const primaryColorClass = color === 'primary' ? 'button--primary' : '';

    return (
        <button className={
                `button ${smallClass} ${outlinedClass} ${primaryColorClass} ${containedClass}`
            }
            onClick={onClick}>
            {children} </button>
    )
};

export default Button;
