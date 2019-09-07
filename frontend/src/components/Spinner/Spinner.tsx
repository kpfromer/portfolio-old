import React from 'react';

import styles from './spinner.module.css';

export interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <div className={styles.ldsDefault}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
