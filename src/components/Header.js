import React from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import dropdown from '../assets/dropdown.svg';
import './Header.css';

function Header({ 
  showSearch, 
  setShowSearch, 
  searchQuery, 
  setSearchQuery, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  isMenuHidden,
  menuItems,
  logotype,
  menuIcon,
  search
}) {
  const handleSearchClose = () => setShowSearch(false);
  const searchRef = useOutsideClick(handleSearchClose);

  return (
    <>
      <header className="App-header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              src={menuIcon} 
              alt="menu" 
              className="mobile-menu-icon"
              onClick={() => setIsMobileMenuOpen(true)} 
            />
            {!isMobileMenuOpen && <img src={logotype} alt="logotype" />}
            <div className="search-container" ref={searchRef}>
              {showSearch ? (
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              ) : (
                <img 
                  src={search} 
                  alt="search" 
                  onClick={() => setShowSearch(true)} 
                />
              )}
            </div>
          </div>
        </div>
      </header>
      <nav className={`menu-wrapper ${isMenuHidden ? 'hide' : ''}`}>
        <div className="menu-items">
          <div className="menu-items-content">
            {menuItems.map((menuItem) => (
              <div key={menuItem.title} className="menu-item">
                <div className="menu-title">
                  <span>{menuItem.title}</span>
                  {menuItem.submenu.length > 0 && (
                    <img src={dropdown} alt="dropdown" className="dropdown-icon" />
                  )}
                </div>
                {menuItem.submenu.length > 0 && (
                  <div className="submenu">
                    {menuItem.submenu.map(subItem => (
                      <div key={subItem} className="submenu-item">
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header; 