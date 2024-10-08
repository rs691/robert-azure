import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import styles from "./AddedNav.module.css";
import process from 'process';


const StateNav = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  const location = useLocation();
  const navigate = useNavigate();
  const parallaxRef = useRef(null);
  
  // State to track parallax scroll position
  const [lastParallaxPosition, setLastParallaxPosition] = useState(0);
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    // If returning to home page, restore the parallax position
    if (isHomePage && isReturning && parallaxRef.current) {
      parallaxRef.current.scrollTo(lastParallaxPosition);
      setIsReturning(false);
    }
  }, [isHomePage, isReturning, lastParallaxPosition]);

  // Custom back navigation handler for non-home pages
  const handleBack = () => {
    setIsReturning(true);
    navigate('/');
  };

  // Handle navigation to other pages
  const handleSectionClick = (link) => {
    // Save current parallax position before navigating
    if (parallaxRef.current) {
      const currentPosition = parallaxRef.current.current;
      setLastParallaxPosition(currentPosition);
    }
    navigate(link);
  };

  const sections = [
    { offset: 1.3, speed: 1, content: 'Education', link: '/education' },
    { offset: 3.5, speed: 1.0, content: 'Projects', link: '/projects' },
    { offset: 5, speed: 1.5, content: 'Contact', link: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  // Optional: Debug component to show current parallax position
  const DebugInfo = () => (
    <div className={styles.debugInfo}>
      <p>Last Parallax Position: {lastParallaxPosition}</p>
      <p>Is Returning: {isReturning.toString()}</p>
    </div>
  );

  return (
    <div>
      <div className={styles.background} />
      {isHomePage ? (
        <>
          <Parallax pages={6} ref={parallaxRef}>
            <ParallaxLayer
              offset={0}
              speed={0.5}
              style={{ ...alignCenter, justifyContent: "center" }}
            >
              <div className={styles.scrollText}>
                <h1>Robert Stewart</h1>
                <p>If youd like to know a little bit more about me,</p>
                <p>please keep scrolling</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 1, end: 2 }}
              style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
            >
              <div className={`${styles.stickyText} ${styles.sticky}`}>
                <h1>I am currently finishing school</h1>
                <h1>and have been studying Software Development</h1>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 3, end: 4 }}
              style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
            >
              <div className={`${styles.stickyText} ${styles.sticky}`}>
                <h1>I worked at a wireless communications company</h1>
                <h1>doing support and web design</h1>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 5, end: 6 }}
              style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
            >
              <div className={`${styles.stickyText} ${styles.sticky}`}>
                <h1>Please feel free to reach out to me</h1>
                <h1>Click on the contact text for a contact form</h1>
              </div>
            </ParallaxLayer>

            {sections.map((section) => (
              <ParallaxLayer
                key={section.content}
                offset={section.offset}
                speed={section.speed}
                style={{ ...alignCenter, justifyContent: "flex-end", zIndex: 2 }}
              >
                <div 
                  className={styles.clickableText}
                  onClick={() => handleSectionClick(section.link)}
                >
                  {section.content}
                </div>
              </ParallaxLayer>
            ))}
          </Parallax>
          {process.env.NODE_ENV === 'development' && <DebugInfo />}
        </>
      ) : (
        <div className={styles.contentPage}>
          <button 
            onClick={handleBack}
            className={styles.backButton}
          >
            Back to Main
          </button>
          <Outlet />
         
        </div>
      )}
    </div>
  );
};

export default StateNav;