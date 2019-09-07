import React from 'react';
import clsx from 'clsx';

import styles from './container.module.css';

export interface ContainerProps {
  style?: object;
  className?: string;
  wrap?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
  wrap = false
}) => {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      {wrap ? <div className={styles.singleWrap}>{children}</div> : children}
    </div>
  );
};

export default Container;
