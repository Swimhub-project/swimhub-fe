import {useState, ReactNode, createContext} from 'react';

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
  function Dropdown({ children }: DropdownProps) {
    const [open, setOpen] = useState(false);
  
    return (
      <DropdownContext.Provider value={{ open, setOpen }}>
        <div className="relative">{children}</div>
      </DropdownContext.Provider>
    );
  }
  
  export default Dropdown;