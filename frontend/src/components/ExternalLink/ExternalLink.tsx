import React from 'react';

export interface ExternalLinkProps {
  to: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      style={{ color: '#e3872d' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
