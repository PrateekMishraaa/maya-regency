import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import Park from "../assets/park2.jpeg"
import Phone from "../assets/call.svg"
import Whatsapp from "../assets/whatsapp.svg"
import Banner from "../assets/newhome.jpeg";
import BannerTwo from "../assets/banner2.jpeg";
import RoomOne from "../assets/room1.jpeg";
import RoomTwo from "../assets/room2.jpeg";
import RoomThree from "../assets/room3.jpeg";
// import ViewOne from "../assets/view.jpeg";
// import ViewTwo from "../assets/view2.jpeg";
import ViewThree from "../assets/view3.jpeg";
import ViewFour from "../assets/view4.jpeg";
import ViewFive from "../assets/view5.jpeg";
import ViewSix from "../assets/view6.jpeg";
// import ViewSeven from "../assets/view7.jpeg";
import ViewEight from "../assets/view8.jpeg";
import Naini from "../assets/nainilake.jpg"
import Naina from "../assets/nainadevi.jpg"
import ViewTwenty from "../assets/view23.jpg"
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigate = (path) => {
    // Replace with your navigation logic
    window.location.href = path;
  };

  const near = [
    {
      img: Naini,
      title: "Naini Lake",
      description: "Endless lake surrounded by green mountains, cool breeze and birdsong. Colorful boats and clear water. Golden fish swimming below. A peaceful dream spot."
    },
    {
      img: Naina,
      title: "Naina Devi Temple", 
      description: "Colorful flags fluttering in the breeze. Fragrance of incense in the fresh mountain air. Glimpse of the Naina Devi idol inside the shrine. Calm aura and peaceful chants all around."
    }
  ];

  const aboutUs = [
    {
      img: RoomOne,
      description: "At The Mannu Maharani Regency, your perfect retreat in the enchanting hills of Nainital. Nestled in the heart of this picturesque town, our hotel offers breathtaking views of the snow-capped Himalayas and the pristine Naini Lake – a haven for those seeking peace, comfort, and a touch of luxury."
    }
  ];

  const accommodations = [
    {
      img: RoomOne,
      title: "Luxury Lake View Room",
      description: "Luxury Room Lake Facing is a well appointed room with lake facing.",
      facilities: "270 sq.ft. Double Sized Bed. Max. 3 Adults. Lake View",
      price: "7,599"
    },
    {
      img: RoomTwo, 
      title: "Premium Lake View Room",
      description: "Premium Lake Facing Rooms are well-appointed with balconies and lake view.",
      facilities: "195 sq.ft. King Sized Bed. Max. 3 Adults. Lake View",
      price: "8,599"
    },
    {
      img: RoomThree,
      title: "Elegant Room",
      description: "Elegant Lake Facing rooms with all amenities on high floor with lake view.",
      facilities: "324 sq.ft. Double Sized Bed. Lake View", 
      price: "6,499"
    }
  ];

  const gallery = [
    ViewThree,
   ViewFour, 
    ViewFive,
    ViewSix,
    ViewSix,
 ViewTwenty
  ];

  const styles = {
    // Global styles
    container: {
      overflowX: 'hidden',
      fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    },

    // Banner styles
    bannerSection: {
      height: '100vh',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      overflow: 'hidden'
    },
    bannerContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      zIndex: 2,
      padding: '0 1rem',
      maxWidth: '800px'
    },
    bannerTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      animation: isLoaded ? 'fadeInUp 1s ease-out' : 'none'
    },
    bannerSubtitle: {
      fontSize: '1.25rem',
    fontWeight:'Bold',
      marginBottom: '2rem',
      opacity: 0.9,
      animation: isLoaded ? 'fadeInUp 1s ease-out 0.3s both' : 'none'
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.7
    },
    bannerButton: {
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      background: 'rgba(255,255,255,0.2)',
      color: 'white',
      border: '2px solid white',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      animation: isLoaded ? 'fadeInUp 1s ease-out 0.6s both' : 'none'
    },

    // Section styles
    section: {
      padding: '5rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#2d3748',
      position: 'relative'
    },
    sectionTitleAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: 'black',
      borderRadius: '2px'
    },

    // About section
    aboutContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      flexDirection: 'row'
    },
    aboutImage: {
      flex: '1',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    aboutImageImg: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    aboutContent: {
      flex: '1',
      padding: '1rem'
    },
    aboutText: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#4a5568',
      marginBottom: '2rem'
    },
    button: {
      padding: '0.75rem 2rem',
      background: 'black',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: 'black'
    },

    // Accommodations
    accommodationCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '3rem',
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    accommodationImage: {
      flex: '1',
      height: '300px'
    },
    accommodationImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    accommodationContent: {
      flex: '1',
      padding: '2rem'
    },
    accommodationTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#2d3748'
    },
    accommodationDesc: {
      color: '#4a5568',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    accommodationFacilities: {
      background: '#f7fafc',
      padding: '1rem',
      borderRadius: '10px',
      marginBottom: '1rem',
      fontSize: '0.9rem',
      color: '#2d3748'
    },
    accommodationPrice: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '1rem'
    },

    // Gallery
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    },
    galleryItem: {
      borderRadius: '15px',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    galleryImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },

    // Attractions
    attractionCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '2rem',
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    attractionContent: {
      flex: '1',
      padding: '2rem'
    },
    attractionImage: {
      flex: '1',
      height: '250px'
    },
    attractionImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    attractionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#2d3748'
    },
    attractionDesc: {
      color: '#4a5568',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem'
    },
    secondaryButton: {
      padding: '0.75rem 1.5rem',
      background: 'transparent',
      color: '#667eea',
      border: '2px solid #667eea',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    },

    // Fixed buttons
    fixedButtons: {
      position: 'fixed',
      bottom: '2rem',
      left: '1rem',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    whatsappButton: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
      transition: 'transform 0.3s ease'
    },
    phoneButton: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      // background: '#007bff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      textDecoration: 'none',
      // boxShadow: '0 4px 12px rgba(0, 123, 255, 0.4)',
      transition: 'transform 0.3s ease'
    }
  };

  // Media queries
  const mediaStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .banner-title {
        font-size: 2.5rem !important;
      }
      .banner-subtitle {
        font-size: 1rem !important;
      }
      .section {
        padding: 3rem 1rem !important;
      }
      .section-title {
        font-size: 2rem !important;
      }
      .about-container {
        flex-direction: column !important;
      }
      .accommodation-card {
        flex-direction: column !important;
      }
      .accommodation-image {
        height: 250px !important;
      }
      .attraction-card {
        flex-direction: column !important;
      }
      .attraction-image {
        height: 200px !important;
      }
      .gallery-grid {
        grid-template-columns: 1fr !important;
      }
      .button-group {
        flex-direction: column !important;
      }
      .fixed-buttons {
        bottom: 1rem !important;
        left: 0.5rem !important;
      }
    }

    @media (max-width: 480px) {
      .banner-title {
        font-size: 2rem !important;
      }
      .section {
        padding: 2rem 0.5rem !important;
      }
      .accommodation-content,
      .attraction-content {
        padding: 1rem !important;
      }
    }

    .accommodation-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .gallery-item:hover {
      transform: scale(1.05);
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    .about-image:hover {
      transform: scale(1.02);
    }

    .about-image:hover img {
      transform: scale(1.05);
    }

    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }

    .secondary-button:hover {
      background: #667eea;
      color: white;
    }

    .whatsapp-button:hover,
    .phone-button:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <>
    <Navbar/>
      <style>{mediaStyles}</style>
      <div style={styles.container}>
        
        {/* Banner Section */}
        <section style={styles.bannerSection}>
          <img 
            src={Banner}
            alt="banner" 
            style={styles.bannerImage}
          />
          <div style={styles.bannerContent}>
            <h1 className="banner-title" style={styles.bannerTitle}>
              Mannu Maharani Regency
            </h1>
            <p className="banner-subtitle" style={styles.bannerSubtitle}>
              Your Perfect Retreat in the Enchanting Hills of Nainital
            </p>
            <button
              style={styles.bannerButton}
              onClick={() => handleNavigate('/contact')}
              onMouseOver={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#667eea';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.color = 'white';
              }}
            >
              Book Your Stay
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="section" style={styles.section}>
          <h2 className="section-title" style={styles.sectionTitle}>
            About Us
            <div style={styles.sectionTitleAfter}></div>
          </h2>
          <div className="about-container" style={styles.aboutContainer}>
            <div className="about-image" style={styles.aboutImage}>
              <img
                src={aboutUs[0].img}
                alt="About Us"
                style={styles.aboutImageImg}
              />
            </div>
            <div style={styles.aboutContent}>
              <p style={styles.aboutText}>
                {aboutUs[0].description}
              </p>
              <button
                style={styles.button}
                onClick={() => handleNavigate('/about')}
                className="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Accommodations Section */}
        <section className="section" style={{...styles.section, background: '#f8fafc'}}>
          <h2 className="section-title" style={styles.sectionTitle}>
            Accommodations
            <div style={styles.sectionTitleAfter}></div>
          </h2>
          <div>
            {accommodations.map((item, index) => (
              <div key={index} className="accommodation-card" style={styles.accommodationCard}>
                <div className="accommodation-image" style={styles.accommodationImage}>
                  <img src={item.img} alt={item.title} style={styles.accommodationImageImg} />
                </div>
                <div className="accommodation-content" style={styles.accommodationContent}>
                  <h3 style={styles.accommodationTitle}>{item.title}</h3>
                  <p style={styles.accommodationDesc}>{item.description}</p>
                  <div style={styles.accommodationFacilities}>
                    <strong>Facilities:</strong> {item.facilities}
                  </div>
                  <p style={styles.accommodationPrice}>
                    Starting from ₹{item.price} per night
                  </p>
                  <button
                    style={styles.button}
                    onClick={() => handleNavigate('/book-now')}
                    className="button"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section" style={styles.section}>
          <h2 className="section-title" style={styles.sectionTitle}>
            Gallery
            <div style={styles.sectionTitleAfter}></div>
          </h2>
          <div className="gallery-grid" style={styles.galleryGrid}>
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item" style={styles.galleryItem}>
                <img src={item} alt={`View ${index + 1}`} style={styles.galleryImage} />
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center'}}>
            <button
              style={styles.button}
              onClick={() => handleNavigate('/gallery')}
              className="button"
            >
              View More
            </button>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="section" style={{...styles.section, background: '#f8fafc'}}>
          <h2 className="section-title" style={styles.sectionTitle}>
            Nearby Attractions  
            <div style={styles.sectionTitleAfter}></div>
          </h2>
          <div>
            {near.map((item, index) => (
              <div key={index} className="attraction-card" style={styles.attractionCard}>
                <div className="attraction-content" style={styles.attractionContent}>
                  <h3 style={styles.attractionTitle}>{item.title}</h3>
                  <p style={styles.attractionDesc}>{item.description}</p>
                  <div className="button-group" style={styles.buttonGroup}>
                    <button style={styles.button} className="button">
                      Contact
                    </button>
                    <button
                      style={styles.secondaryButton}
                      className="secondary-button"
                      onClick={() => handleNavigate('/attractions')}
                    >
                      View More
                    </button>
                  </div>
                </div>
                <div className="attraction-image" style={styles.attractionImage}>
                  <img src={item.img} alt={item.title} style={styles.attractionImageImg} />
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <button
              style={styles.button}
              onClick={() => handleNavigate('/attractions')}
              className="button"
            >
              View All Attractions
            </button>
          </div>
        </section>

        {/* Fixed Action Buttons */}
        <div className="fixed-buttons" style={styles.fixedButtons}>
          <a
            href="https://api.whatsapp.com/send?phone=917835834101&text=Hello!%20I%20have%20a%20query%20regarding%20Manu%20Maharani%20Regency."
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
            className="whatsapp-button"
          >
            <img src={Whatsapp} alt="" />
          </a>
          <a
            href="tel:917835834101"
            style={styles.phoneButton}
            className="phone-button"
          >
            <img src={Phone} alt="" />
          </a>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;