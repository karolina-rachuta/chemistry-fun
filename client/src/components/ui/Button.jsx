import React from 'react';
import styles from './Button.module.css';

function Button({
    children,
    variant,
    active = false,
    className = '',
    ...props
}) {
    const classes = [
        styles.primary,
        variant && styles[variant],
        active && styles.active,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;
