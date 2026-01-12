import { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'mobile' | 'delete' | 'primary' | 'nav' | 'back' | 'answers';

type ButtonProps = {
    children: ReactNode,
    variant?: ButtonVariant,
    active?: boolean,
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
    children,
    variant,
    active = false,
    className = '',
    ...props
}: ButtonProps) {
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
