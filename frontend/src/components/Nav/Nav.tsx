import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export interface NavProps {
  socialIcons: Array<{
    link: string;
    icon: JSX.Element;
  }>;
  mobile: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ socialIcons, mobile, open, setOpen }) => {
  if (mobile) {
    return <MobileNav open={open} setOpen={setOpen} />;
  } else {
    return (
      <DesktopNav socialIcons={socialIcons} open={open} setOpen={setOpen} />
    );
  }
};

export default Nav;
