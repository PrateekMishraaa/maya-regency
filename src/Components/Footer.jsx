import React from 'react';
import {
  FaLocationDot,
  FaPinterest,
  FaXTwitter,
  FaWhatsapp
} from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { CiMail, CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';

const Footer = () => {
  const footerStyles = {
    footer: {
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '3rem 1.5rem',
      fontSize: '0.875rem'
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      padding: '2rem 0'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: 'white'
    },
    contactSection: {
      gridColumn: 'span 1'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
      marginBottom: '0.75rem'
    },
    phoneItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.75rem'
    },
    icon: {
      color: '#dc2626',
      fontSize: '1rem',
      marginTop: '0.25rem',
      flexShrink: 0
    },
    phoneIcon: {
      color: '#dc2626',
      fontSize: '1rem',
      flexShrink: 0
    },
    link: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    quickLinksContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    socialContainer: {
      display: 'flex',
      gap: '1rem',
      fontSize: '1.25rem',
      flexWrap: 'wrap'
    },
    socialLink: {
      color: '#ffffff',
      transition: 'color 0.3s ease'
    },
    supportContainer: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    whatsappIcon: {
      fontSize: '2rem',
      color: '#ffffff',
      transition: 'color 0.3s ease'
    },
    callIcon: {
      fontSize: '1.5rem',
      color: '#ffffff',
      transition: 'color 0.3s ease'
    },
    bottomSection: {
      textAlign: 'center',
      marginTop: '2.5rem',
      color: '#6b7280',
      fontSize: '0.75rem',
      borderTop: '1px solid #374151',
      paddingTop: '1rem'
    },
    // Media queries using CSS-in-JS approach
    '@media (max-width: 768px)': {
      container: {
        gridTemplateColumns: '1fr',
        gap: '2rem',
        padding: '1rem 0'
      },
      footer: {
        padding: '2rem 1rem'
      },
      sectionTitle: {
        fontSize: '1.125rem'
      },
      socialContainer: {
        justifyContent: 'center'
      },
      supportContainer: {
        justifyContent: 'center'
      }
    }
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        
        {/* Contact Info */}
        <div style={footerStyles.contactSection}>
          <h2 style={footerStyles.sectionTitle}>Contact Us</h2>
          <div style={footerStyles.contactItem}>
            <FaLocationDot style={footerStyles.icon} />
            <p>Thandi Rd, Tallital, Nainital, Uttarakhand 263002</p>
          </div>
          {[
            { phone: "+917835834101" },
            { phone: "+919971855186" },
            { phone: "+918743000197" }
          ].map((item, i) => (
            <div key={i} style={footerStyles.phoneItem}>
              <IoIosCall style={footerStyles.phoneIcon} />
              <a 
                href={`tel:${item.phone}`} 
                style={footerStyles.link}
                onMouseOver={(e) => e.target.style.color = '#ffffff'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                {item.phone}
              </a>
            </div>
          ))}
          <div style={footerStyles.phoneItem}>
            <CiMail style={footerStyles.phoneIcon} />
            <a 
              href="mailto:booking@rchronline.com" 
              style={footerStyles.link}
              onMouseOver={(e) => e.target.style.color = '#ffffff'}
              onMouseOut={(e) => e.target.style.color = '#9ca3af'}
            >
              booking@rchronline.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 style={footerStyles.sectionTitle}>Quick Links</h2>
          <div style={footerStyles.quickLinksContainer}>
            {[
              "Home",
              "About", 
              "Restaurant",
              "Contact",
              "Refund & Cancellation Policy",
              "Privacy Policy"
            ].map((link, i) => (
              <a 
                key={i} 
                href="#" 
                style={footerStyles.link}
                onMouseOver={(e) => e.target.style.color = '#ffffff'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* TripAdvisor */}
        <div>
          <h2 style={footerStyles.sectionTitle}>TripAdvisor</h2>
          <p style={{color: '#9ca3af', marginBottom: '0.5rem'}}>Now with hotel reviews by</p>
          <a 
            href="#" 
            style={{...footerStyles.link, color: '#60a5fa', textDecoration: 'underline'}}
            onMouseOver={(e) => e.target.style.color = '#ffffff'}
            onMouseOut={(e) => e.target.style.color = '#60a5fa'}
          >
            TripAdvisor
          </a>
        </div>

        {/* Social Icons */}
        <div>
          <h2 style={footerStyles.sectionTitle}>Connect with Us</h2>
          <div style={footerStyles.socialContainer}>
            <a 
              href="#" 
              style={footerStyles.socialLink}
              onMouseOver={(e) => e.target.style.color = '#dc2626'}
              onMouseOut={(e) => e.target.style.color = '#ffffff'}
            >
              <FaPinterest />
            </a>
            <a 
              href="#" 
              style={footerStyles.socialLink}
              onMouseOver={(e) => e.target.style.color = '#3b82f6'}
              onMouseOut={(e) => e.target.style.color = '#ffffff'}
            >
              <CiFacebook />
            </a>
            <a 
              href="#" 
              style={footerStyles.socialLink}
              onMouseOver={(e) => e.target.style.color = '#ec4899'}
              onMouseOut={(e) => e.target.style.color = '#ffffff'}
            >
              <BsInstagram />
            </a>
            <a 
              href="#" 
              style={footerStyles.socialLink}
              onMouseOver={(e) => e.target.style.color = '#ffffff'}
              onMouseOut={(e) => e.target.style.color = '#ffffff'}
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* WhatsApp & Call */}
        <div>
          <h2 style={footerStyles.sectionTitle}>Support</h2>
          <div style={footerStyles.supportContainer}>
            <a
              href="https://api.whatsapp.com/send?phone=917835834101&text=Hello!%20I%20have%20a%20query%20regarding%20Manu%20Maharani%20Regency."
              style={footerStyles.whatsappIcon}
              onMouseOver={(e) => e.target.style.color = '#22c55e'}
              onMouseOut={(e) => e.target.style.color = '#ffffff'}
            >
              <FaWhatsapp />
            </a>
            <a 
              href="tel:+917835834101" 
              style={footerStyles.callIcon}
              onMouseOver={(e) => e.target.style.color = '#dc2626'}
              onMouseOut={(e) => e.target.style.color = '#ffffff'}
            >
              <MdCall />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Note */}
      <div style={footerStyles.bottomSection}>
        © {new Date().getFullYear()} Manu Maharani Regency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;