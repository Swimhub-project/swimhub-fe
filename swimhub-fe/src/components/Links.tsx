
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/links.css'

export const SolidLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link className='solid-link' to={to}>
      {children}
    </Link>
  );
};

export const OutlineLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link className='outline-link' to={to}>
      {children}
    </Link>
  );
};

export const NakedLink = ({to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link className='naked-link' to={to}>
      {children}
    </Link>
  );
};
