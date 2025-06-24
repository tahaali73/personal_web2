import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CvModal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(true);
  const pdfContainerRef = useRef(null);

  useEffect(() => {
    // Simulate PDF loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    // Add custom scrollbar styling
    const style = document.createElement('style');
    style.innerHTML = `
      .pdf-container::-webkit-scrollbar {
        width: 0;
        height: 0;
        background: transparent;
      }
      .pdf-container {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/home/CV TAHA.pdf';
    link.download = 'Taha_CV.pdf';
    link.click();
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Mobile-friendly PDF viewer
  const renderPDFViewer = () => {
    return (
      <div className="w-full h-full">
        <iframe 
          src="src/assets/home/CV TAHA.pdf"
          width="100%"
          height="100%"
          className="min-h-full w-full"
          frameBorder="0"
          title="Taha's CV"
        />
      </div>
    );
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[1000] transition-all duration-300 ${
      isFullscreen ? 'p-0' : 'p-2'
    }`}>
      <div className={`bg-gray-900 rounded-xl w-full overflow-hidden flex flex-col relative transition-all duration-300 ${
        isFullscreen ? 'h-screen w-screen rounded-none' : 'max-w-6xl max-h-[95vh] rounded-xl'
      }`}>
        
        {/* Minimalist Header */}
        <div className="flex justify-between items-center p-2 bg-gray-900 border-b border-gray-800">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="text-xs font-medium text-gray-400">Taha's CV</h1>
          </div>
          <div className="flex items-center space-x-1">
            {/* Fullscreen toggle */}
            <button 
              onClick={toggleFullscreen}
              className="p-1 rounded hover:bg-gray-800 transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 16L4 20l4-2m10 0l2 4-4-2M4 8l2-4 2 4m12 0l-2-4-2 4" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
                </svg>
              )}
            </button>
            {/* Close button */}
            <Link to="/">
              <button className="p-1 rounded hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        
        {/* PDF Viewer - Mobile Optimized */}
        <div 
          ref={pdfContainerRef}
          className="pdf-container flex-1 overflow-auto bg-black relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500 mb-3"></div>
              <p className="text-gray-500 text-sm">Loading CV...</p>
            </div>
          ) : (
            renderPDFViewer()
          )}
        </div>
        
        {/* Minimal Footer */}
        <div className="flex justify-between items-center p-1.5 bg-gray-900 border-t border-gray-800">
          <button
            onClick={downloadCV}
            className="flex items-center text-gray-400 hover:text-gray-300 text-[10px] transition-colors px-2 py-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </button>
          
          <div className="text-[9px] text-gray-500 flex items-center">
            <span>Last updated: June 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvModal;