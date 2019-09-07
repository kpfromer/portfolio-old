import React, { useState } from 'react';
import Nav from '../components/Nav/Nav';
import RightPart from './Home/RightPart';

export interface PageProps {
  socialIcons: Array<{
    link: string;
    icon: JSX.Element;
  }>;
  mobile: boolean;
}

const Page: React.FC<PageProps> = ({ children, socialIcons, mobile }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav
        socialIcons={socialIcons}
        open={open}
        setOpen={setOpen}
        mobile={mobile}
      />
      <RightPart open={open} mobile={mobile}>
        {children}
      </RightPart>
    </>
  );
};

export default Page;
