import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import styles from "./AddedNav.module.css";
import BackHomeButton from "./BackHomeButton";

const SECTIONS = [
  { offset: 1.2, speed: .7, content: 'Education', link: '/education' },
  { offset: 3.1, speed: 1.3, content: 'Projects', link: '/projects' },
  { offset: 5, speed: 1, content: 'Contact', link: '/contact' },
  { offset: 7.3, speed: 1.5, content: 'Other', link: '/other' }
];

const AddedNav = () => {
  const alignCenter = useMemo(() => ({ 
    display: "flex", 
    alignItems: "center" 
  }), []);
  
  const location = useLocation();
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  const [lastParallaxPosition, setLastParallaxPosition] = useState(0);
  const [isReturning, setIsReturning] = useState(false);
  const [lastVisitedSection, setLastVisitedSection] = useState(null);

  const isHomePage = useMemo(() => 
    location.pathname === '/', 
    [location.pathname]
  );

  useEffect(() => {
    if (isHomePage && parallaxRef.current) {
      if (lastVisitedSection) {
        const section = SECTIONS.find(s => s.link === lastVisitedSection);
        parallaxRef.current.scrollTo(section?.offset || 0);
      } else if (isReturning) {
        parallaxRef.current.scrollTo(lastParallaxPosition);
        setIsReturning(false);
      }
    }
  }, [isHomePage, lastVisitedSection, isReturning, lastParallaxPosition]);

  const handleSectionClick = useCallback((link) => {
    if (parallaxRef.current) {
      setLastParallaxPosition(parallaxRef.current.current);
      setLastVisitedSection(link);
    }
    navigate(link);
  }, [navigate]);

  const handleBack = useCallback((e) => {
    e.preventDefault();
    setIsReturning(true);
    navigate('/');
  }, [navigate]);

  
  // 
  const renderStickyContent = useCallback(() => (
    <>
      <ParallaxLayer
        sticky={{ start: 1, end: 2 }}
        style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
      >
        <div className={styles.stickyText}>
          <h1>I am currently finishing school and have been studying software development</h1>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer
        sticky={{ start: 3, end: 4 }}
        style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
      >
        <div className={styles.stickyText}>
          <h1>I worked at a wireless communications company</h1>
          <h1>doing support and web design</h1>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer
        sticky={{ start: 5, end: 6 }}
        style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
      >
        <div className={styles.stickyText}>
          <h1>Please feel free to reach out to me</h1>
          <h1>Click on the contact text for a contact form</h1>
        </div>
      </ParallaxLayer>


      <ParallaxLayer
        sticky={{ start: 7, end: 8 }}
        style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
      >
        <div className={styles.stickyText}>
          <h1>Please feel free to reach out to me</h1>
          <h1>Click on the contact text for a contact form</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 9, end: 10 }}
        style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
      >
        <div className={styles.stickyText}>
       
       
        </div>
        <div className={styles.endText}>The End....</div>
      </ParallaxLayer>
    </>
  ), [alignCenter]);

  return (
    <div>
      <div className={styles.background} />
      
      {isHomePage ? (
        <Parallax pages={10} ref={parallaxRef}>
          <ParallaxLayer
            offset={0}
            speed={0.3}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <div className={styles.scrollText}>
              <p>I&apos;m Robert.</p>
              <p>Keep Scrolling.</p>
            </div>
          </ParallaxLayer>

          {SECTIONS.map((section) => (
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

          {renderStickyContent()}
        </Parallax>
      ) : (
        <div className={styles.contentPage}>
          <button 
            onClick={handleBack}
            className={styles.backButton}
          >
            <ChevronLeft size={20} />
            Back to Main
          </button>
        <BackHomeButton />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default React.memo(AddedNav);