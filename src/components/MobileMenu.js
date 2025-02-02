import React from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import x from '../assets/x.svg';
import dropdown from '../assets/dropdown.svg';
import './MobileMenu.css';

function MobileMenu({ isOpen, onClose, menuItems, logotype }) {
  const menuRef = useOutsideClick(onClose);

  if (!isOpen) return null;

  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="mobile-menu" ref={menuRef}>
        <button 
          className="close-button" 
          onClick={onClose}
          type="button"
        >                
          <img src={x} alt="close" />
        </button>
        <img src={logotype} alt="logotype" className="mobile-menu-logo" />
        <div className="mobile-menu-items">
          {menuItems.map((menuItem) => (
            <div key={menuItem.title} className="mobile-menu-item">
              <div className="mobile-menu-title">
                <span>{menuItem.title}</span>
                <img 
                  src={dropdown} 
                  alt="dropdown"
                  className="dropdown-icon"
                />
              </div>
              <div className="mobile-submenu">
                {menuItem.submenu.map(subItem => (
                  <div 
                    key={subItem} 
                    className="mobile-submenu-item"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MobileMenu); 