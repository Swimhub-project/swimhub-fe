
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/links.css'

export const SolidLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link className='solid_link' to={to}>
      {children}
    </Link>
  );
};

export const OutlineLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link className='outline_link' to={to}>
      {children}
    </Link>
  );
};
