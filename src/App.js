import { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Posts from './components/posts';
import logotype from './assets/logotype.svg';
import menuIcon from './assets/menu.svg';
import search from './assets/search.svg';
import './App.css';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { title: 'Demos', submenu: ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'] },
    { title: 'Post', submenu: ['Standard Post', 'Gallery Post', 'Video Post'] },
    { title: 'Features', submenu: ['About Us', 'Contact', 'Privacy Policy'] },
    { title: 'Categories', submenu: ['Lifestyle', 'Travel', 'Food'] },
    { title: 'Shop', submenu: ['Products', 'Cart', 'Checkout'] },
    { title: 'Buy Now', submenu: [] }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = document.querySelector('.logo-section')?.offsetHeight || 0;
      
      if (currentScrollY > headerHeight + 200 && currentScrollY > lastScrollY) {
        setIsMenuHidden(true);
      } else {
        setIsMenuHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="App">
      <Header 
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMenuHidden={isMenuHidden}
        menuItems={menuItems}
        logotype={logotype}
        menuIcon={menuIcon}
        search={search}
      />
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        logotype={logotype}
      />
      <Posts searchQuery={searchQuery} />
    </div>
  );
}

export default App;
