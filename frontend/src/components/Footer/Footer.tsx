import React from 'react';

import styles from './footer.module.css';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.footerWrap}>
      <div className="container">
        <p>© Copyright 2019. All Rights are Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
