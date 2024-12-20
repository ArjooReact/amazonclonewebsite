import React,{useState} from 'react'
import { SideMenuType } from './SideMenuType';

const SideMenu:React.FC<SideMenuType> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="submenu">
        <div className="submenu-header" onClick={toggleMenu}>
          <span>{title}</span>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
        </div>
        {isOpen && <ul className="submenu-list">{children}</ul>}
      </div>
    );
  };

  export default SideMenu