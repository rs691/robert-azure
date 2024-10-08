import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './AddedNav.css';

// Constants
const TOTAL_PAGES = 8;
const SECTIONS = [
  { offset: 1.3, speed: 1, content: 'Education', link: '/education' },
  { offset: 3.5, speed: 1.5, content: 'Projects', link: '/projects' },
  { offset: 5, speed: 1.8, content: 'Contact', link: '/contact' },
  { offset: 7, speed: 2, content: 'Other', link: '/home' }
];

const STICKY_CONTENT = [
  {
    start: 1,
    end: 2,
    content: 'I am currently finishing school and have been studying software development'
  },
  {
    start: 3,
    end: 4,
    content: ['I worked at a wireless communications company', 'doing support and web design']
  },
  {
    start: 5,
    end: 6,
    content: ['Please feel free to reach out to me', 'Click on the contact text for a contact form']
  }
];

const AddedNav = () => {
  const alignCenter = useMemo(() => ({ 
    display: "flex", 
    alignItems: "center" 
  }), []);
  
  const location = useLocation();
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  const [scrollState, setScrollState] = useState({
    lastPosition: 0,
    isReturning: false,
    lastVisitedSection: null
  });

  const isHomePage = useMemo(() => 
    location.pathname === '/', 
    [location.pathname]
  );

  // Scroll handling
  useEffect(() => {
    if (!isHomePage || !parallaxRef.current) return;

    const { lastVisitedSection, isReturning, lastPosition } = scrollState;
    
    if (lastVisitedSection) {
      const section = SECTIONS.find(s => s.link === lastVisitedSection);
      parallaxRef.current.scrollTo(section?.offset || 0);
    } else if (isReturning) {
      parallaxRef.current.scrollTo(lastPosition);
      setScrollState(prev => ({ ...prev, isReturning: false }));
    }
  }, [isHomePage, scrollState]);

  // Navigation handlers
  const handleSectionClick = useCallback((link) => {
    if (parallaxRef.current) {
      setScrollState(prev => ({
        ...prev,
        lastPosition: parallaxRef.current.current,
        lastVisitedSection: link
      }));
      navigate(link);
    }
  }, [navigate]);

  const handleBack = useCallback((e) => {
    e.preventDefault();
    setScrollState(prev => ({ ...prev, isReturning: true }));
    navigate('/');
  }, [navigate]);

  // Render helpers
  const renderStickyLayers = useCallback(() => 
    STICKY_CONTENT.map(({ start, end, content }, index) => (
      <ParallaxLayer
        key={`sticky-${index}`}
        sticky={{ start, end }}
        style={{ 
          ...alignCenter, 
          justifyContent: "flex-start", 
          zIndex: -1 
        }}
      >
        <div className="sticky-text">
          {Array.isArray(content) ? (
            content.map((text, i) => <h1 key={i}>{text}</h1>)
          ) : (
            <h1>{content}</h1>
          )}
        </div>
      </ParallaxLayer>
    )), [alignCenter]);

  const renderSectionLayers = useCallback(() => 
    SECTIONS.map((section) => (
      <ParallaxLayer
        key={section.content}
        offset={section.offset}
        speed={section.speed}
        style={{ 
          ...alignCenter, 
          justifyContent: "flex-end", 
          zIndex: 2 
        }}
      >
        <div 
          className="hover:scale-110 transition-transform cursor-pointer text-xl font-bold"
          onClick={() => handleSectionClick(section.link)}
        >
          {section.content}
        </div>
      </ParallaxLayer>
    )), [alignCenter, handleSectionClick]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {isHomePage ? (
        <Parallax pages={TOTAL_PAGES} ref={parallaxRef}>
          {/* Hero Section */}
          <ParallaxLayer
            offset={0}
            speed={0.3}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Robert Stewart</h1>
              <p className="text-xl">If you like to know a little bit more about me,</p>
              <p className="text-xl">please keep scrolling</p>
            </div>
          </ParallaxLayer>

          {renderSectionLayers()}
          {renderStickyLayers()}
        </Parallax>
      ) : (
        <div className="p-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Main
          </button>
          <div className="mt-8">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(AddedNav);