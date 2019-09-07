import clsx from 'clsx';
import React from 'react';

// TODO: fix border for no subtitle
import styles from './title.module.css';

export interface TitleProps {
  title: string;
  subtitle?: string;
  style?: object;
  id?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  style,
  id,
  className
}) => {
  return (
    <div id={id} className={clsx(styles.titleHolder, className)} style={style}>
      <h3>{title}</h3>
      {subtitle !== undefined && <span>{subtitle}</span>}
    </div>
  );
};

export default Title;
