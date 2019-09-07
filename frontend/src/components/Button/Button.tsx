import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.css';

export interface ButtonProps {
  url?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  url,
  type,
  className,
  children,
  onClick
}) => {
  if (url !== undefined) {
    if (url.startsWith('/')) {
      return (
        <Link to={url} className={clsx(styles.button, className)}>
          <span>{children}</span>
        </Link>
      );
    } else {
      return (
        <a
          href={url}
          className={clsx(styles.button, className)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{children}</span>
        </a>
      );
    }
  }
  return (
    <button
      type={type}
      className={clsx(styles.button, className)}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
