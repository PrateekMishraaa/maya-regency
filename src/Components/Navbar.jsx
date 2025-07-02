import React, { useState } from 'react';
import Logo from "../assets/logo.jpg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = () => {
    // Replace with your navigation logic
    // For demo purposes, this would navigate to contact page
    window.location.href = '/contact';
    setMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navbarStyles = {
    nav: {
      height: '80px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 1000,
      padding: '0 1rem'
    },
    logoContainer: {
      height: '56px',
      flexShrink: 0
    },
    logoImage: {
      height: '100%',
      width: 'auto',
      objectFit: 'contain'
    },
    desktopMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    desktopMenuItem: {
      margin: 0
    },
    navLink: {
      color: '#000000',
      textDecoration: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      fontFamily: 'sans-serif',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    bookButton: {
      height: '48px',
      padding: '0 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
      border: '2px solid #000000',
      borderRadius: '0.75rem',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    },
    mobileMenuToggle: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      padding: '0.5rem',
      background: 'none',
      border: 'none'
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      backgroundColor: '#000000',
      margin: '3px 0',
      transition: '0.3s',
      borderRadius: '2px'
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'none',
      flexDirection: 'column',
      padding: '1rem 0',
      zIndex: 999
    },
    mobileMenuVisible: {
      display: 'flex'
    },
    mobileMenuItem: {
      padding: '0.75rem 2rem',
      borderBottom: '1px solid #f3f4f6'
    },
    mobileNavLink: {
      color: '#000000',
      textDecoration: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      fontFamily: 'sans-serif',
      display: 'block',
      width: '100%'
    },
    mobileBookButton: {
      margin: '1rem 2rem',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
      border: '2px solid #000000',
      borderRadius: '0.75rem',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      width: 'calc(100% - 4rem)'
    }
  };

  // Responsive styles using media queries
  const mediaStyles = `
    @media (max-width: 1024px) {
      .desktop-menu {
        gap: 1.5rem !important;
      }
      .nav-link {
        font-size: 1rem !important;
      }
      .book-button {
        padding: 0 1rem !important;
        font-size: 0.9rem !important;
      }
    }
    
    @media (max-width: 768px) {
      .navbar {
        padding: 0 1rem !important;
      }
      .desktop-menu {
        display: none !important;
      }
      .mobile-toggle {
        display: flex !important;
      }
      .logo-container {
        height: 48px !important;
      }
    }
    
    @media (max-width: 480px) {
      .navbar {
        height: 70px !important;
        padding: 0 0.5rem !important;
      }
      .logo-container {
        height: 40px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <nav className="navbar" style={navbarStyles.nav}>
        {/* Logo */}
        <div className="logo-container" style={navbarStyles.logoContainer}>
          <a href="/">
            <img 
              src={Logo} 
              alt="logo" 
              style={navbarStyles.logoImage}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu" style={navbarStyles.desktopMenu}>
          <li style={navbarStyles.desktopMenuItem}>
            <a 
              href="/about" 
              className="nav-link"
              style={navbarStyles.navLink}
              onMouseOver={(e) => e.target.style.color = '#666666'}
              onMouseOut={(e) => e.target.style.color = '#000000'}
            >
              About
            </a>
          </li>
          <li style={navbarStyles.desktopMenuItem}>
            <a 
              href="/rooms" 
              className="nav-link"
              style={navbarStyles.navLink}
              onMouseOver={(e) => e.target.style.color = '#666666'}
              onMouseOut={(e) => e.target.style.color = '#000000'}
            >
              Room
            </a>
          </li>
          <li style={navbarStyles.desktopMenuItem}>
            <a 
              href="/gallery" 
              className="nav-link"
              style={navbarStyles.navLink}
              onMouseOver={(e) => e.target.style.color = '#666666'}
              onMouseOut={(e) => e.target.style.color = '#000000'}
            >
              Gallery
            </a>
          </li>
          <li style={navbarStyles.desktopMenuItem}>
            <a 
              href="/attractions" 
              className="nav-link"
              style={navbarStyles.navLink}
              onMouseOver={(e) => e.target.style.color = '#666666'}
              onMouseOut={(e) => e.target.style.color = '#000000'}
            >
              Attractions
            </a>
          </li>
          <li style={navbarStyles.desktopMenuItem}>
            <a 
              href="/payment" 
              className="nav-link"
              style={navbarStyles.navLink}
              onMouseOver={(e) => e.target.style.color = '#666666'}
              onMouseOut={(e) => e.target.style.color = '#000000'}
            >
              Payment
            </a>
          </li>
          <li style={navbarStyles.desktopMenuItem}>
            <a 
              href="/contact" 
              className="nav-link"
              style={navbarStyles.navLink}
              onMouseOver={(e) => e.target.style.color = '#666666'}
              onMouseOut={(e) => e.target.style.color = '#000000'}
            >
              Contact
            </a>
          </li>
          <li style={navbarStyles.desktopMenuItem}>
            <button
              onClick={handleNavigate}
              className="book-button"
              style={navbarStyles.bookButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.color = '#000000';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#000000';
                e.target.style.color = '#ffffff';
              }}
            >
              Book Your Stay
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          style={navbarStyles.mobileMenuToggle}
          onClick={toggleMenu}
        >
          <div 
            style={{
              ...navbarStyles.hamburgerLine,
              transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
            }}
          ></div>
          <div 
            style={{
              ...navbarStyles.hamburgerLine,
              opacity: menuOpen ? '0' : '1'
            }}
          ></div>
          <div 
            style={{
              ...navbarStyles.hamburgerLine,
              transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
            }}
          ></div>
        </button>

        {/* Mobile Menu */}
        <div 
          style={{
            ...navbarStyles.mobileMenu,
            ...(menuOpen ? navbarStyles.mobileMenuVisible : {})
          }}
        >
          <div style={navbarStyles.mobileMenuItem}>
            <a 
              href="/about" 
              style={navbarStyles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </div>
          <div style={navbarStyles.mobileMenuItem}>
            <a 
              href="/rooms" 
              style={navbarStyles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Room
            </a>
          </div>
          <div style={navbarStyles.mobileMenuItem}>
            <a 
              href="/gallery" 
              style={navbarStyles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </a>
          </div>
          <div style={navbarStyles.mobileMenuItem}>
            <a 
              href="/attractions" 
              style={navbarStyles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Attractions
            </a>
          </div>
          <div style={navbarStyles.mobileMenuItem}>
            <a 
              href="/payment" 
              style={navbarStyles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Payment
            </a>
          </div>
          <div style={navbarStyles.mobileMenuItem}>
            <a 
              href="/contact" 
              style={navbarStyles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          <button
            onClick={handleNavigate}
            style={navbarStyles.mobileBookButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#000000';
              e.target.style.color = '#ffffff';
            }}
          >
            Book Your Stay
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;