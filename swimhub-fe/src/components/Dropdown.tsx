import React, { useState, ReactNode, createContext } from 'react';
import '../styles/components/dropdown.css'

interface DropdownContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownContext = createContext<DropdownContextProps>({
  open: false,
  setOpen: () => {},
});

interface DropdownProps {
  children: ReactNode;
}

interface DropdownButtonProps {
  children: ReactNode;
}

interface DropdownContentProps {
  children: ReactNode
}

function DropdownButton({ children }: DropdownButtonProps) {
  const { open, setOpen } = React.useContext(DropdownContext);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <button className='dropdown-button' onClick={toggleOpen}>
      {children}
    </button>
  );
}

Dropdown.Button = DropdownButton;

function DropdownContent({ children }:DropdownContentProps) {
  const {open } = React.useContext(DropdownContext);
  

  return open ? <div className='dropdown-content'>{children}</div> : null;

}

Dropdown.Content = DropdownContent;

function Dropdown({ children }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className='dropdown-wrapper'>{children}</div>
    </DropdownContext.Provider>
  );
}

export default Dropdown;
