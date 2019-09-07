import clsx from 'clsx';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaChevronLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import styles from './desktop-nav.module.css';

export interface DesktopNavProps {
  socialIcons: Array<{
    link: string;
    icon: JSX.Element;
  }>;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  socialIcons,
  open,
  setOpen
}) => {
  return (
    <div className={clsx(styles.leftpartWrap, open && styles.opened)}>
      <div className={styles.leftpartInner}>
        {/* <div className="logo_wrap">
          <a href="#"><img src="img/logo/desktop-logo.png" alt="Background" /></a>
        </div> */}
        <div className={styles.leftpartTop} />
        <div className={styles.menuListWrap}>
          <ul className={styles.anchorNav}>
            <li>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            {/* <li><HashLink smooth to="/#services">Services</HashLink></li> */}
            <li>
              <HashLink smooth to="/#portfolio">
                Portfolio
              </HashLink>
            </li>
            {/* <li><HashLink smooth to="/#news">News</HashLink></li> */}
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
        {/* TODO: class */}
        <div
          style={{
            marginLeft: 'auto',
            marginTop: 'auto',
            marginRight: 'auto',
            marginBottom: '2rem'
          }}
        >
          <div className={styles.socialWrap}>
            {/* TODO: class */}
            <ul style={{ display: 'flex', flexDirection: 'row' }}>
              <IconContext.Provider value={{ color: 'white', size: '2em' }}>
                {socialIcons.map(icon => (
                  // TODO: better margin
                  <li key={icon.link} style={{ marginRight: '.5rem' }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={icon.link}
                    >
                      {icon.icon}
                    </a>
                  </li>
                ))}
                {/* <li><a href="#"><i className="xcon-facebook" /></a></li>
                <li><a href="#"><i className="xcon-twitter" /></a></li>
                <li><a href="#"><i className="xcon-linkedin" /></a></li>
                <li><a href="#"><i className="xcon-instagram" /></a></li>
                <li><a href="#"><i className="xcon-behance" /></a></li> */}
              </IconContext.Provider>
            </ul>
          </div>
        </div>
        <button
          className={clsx(styles.resize, open && styles.opened)}
          onClick={() => setOpen(!open)}
        >
          {/* <i className="xcon-angle-left" /> */}
          {/* <div className={`xcon-angle-left ${open ? 'opened' : ''}`}> */}
          <IconContext.Provider
            value={{
              className: `xcon-angle-left ${open ? 'opened' : ''}`,
              color: 'white',
              size: '1em'
            }}
          >
            <FaChevronLeft />
          </IconContext.Provider>
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DesktopNav;
