import clsx from 'clsx';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

import styles from './mobile-nav.module.css';

export interface MobileNavProps {
  // TODO: add social icons for mobile
  // socialIcons: {
  //   link: string;
  //   icon: JSX.Element;
  // }[];
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => {
  const close = () => setOpen(false);
  const { transform } = useSpring({
    transform: `translateY(${open ? '0%' : '-100%'})`
  });
  return (
    <div className={styles.mobileHeaderWrap}>
      <div className={styles.mainWrap}>
        {/* Logo classname does nothing btw */}
        <div className="logo">
          {/* <img src="img/logo/mobile_logo.png" alt="logo" /> */}
        </div>
        <div className={styles.menuTrigger} onClick={() => setOpen(!open)}>
          <div className={clsx(styles.hamburger, styles.hamburgerCollapse)}>
            <div className={styles.hamburgerBox}>
              <div className={styles.hamburgerInner} />
            </div>
          </div>
        </div>
      </div>
      <animated.div className={styles.mobileMenuWrap} style={{ transform }}>
        <div className={styles.mobileMenu}>
          <ul className={styles.anchorNav}>
            <li>
              <HashLink onClick={close} smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <HashLink onClick={close} smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink onClick={close} smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink onClick={close} smooth to="/#portfolio">
                Portfolio
              </HashLink>
            </li>
            {/* <li><HashLink onClick={close} smooth to="/#news">News</a></li> */}
            <li>
              <HashLink onClick={close} smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </animated.div>
    </div>
  );
};

export default MobileNav;
