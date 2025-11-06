import React from "react";
import { logo } from "../../imports";

const Loader = () => {
  // Define a darker green for the primary background and a lighter green for the accent/text
  const DEEP_GREEN = "bg-customGreen"; // Primary dark color
  const ACCENT_GREEN = "text-green-300"; // Accent light color

  return (
    // 1. Full screen container with deep green background
    <div className={`flex items-center justify-center h-screen ${DEEP_GREEN}`}>
      
      {/* Container for the logo and text */}
      <div className="flex flex-col justify-center items-center">
        
        {/* 2. Layered Animation Wrapper (Simulating the 'Spinning Ring' effect) */}
        <div className="relative w-24 h-24 mb-6">
          
          {/* Outer Ring: Slow rotation and pulsing glow */}
          <div className={`absolute inset-0 border-4 border-green-500/50 rounded-full animate-spin-slow opacity-80`}></div>

          {/* Inner Ring: Faster rotation and stronger boundary */}
          <div className={`absolute inset-2 border-4 border-green-300/80 rounded-full animate-spin-fast`}></div>

          {/* Logo container: The actual image, slightly centered */}
          <div className="absolute inset-4 flex items-center justify-center bg-white rounded-full p-2 shadow-2xl">
            <img 
              src={logo} 
              alt="ZEWA Africa Logo" 
              className="w-full h-full object-contain transform scale-105" // Slightly larger image
            />
          </div>
        </div>

        {/* 3. Loading Text */}
        <p className={`text-center text-xl font-extrabold tracking-widest ${ACCENT_GREEN} opacity-0 animate-fade-in-delay`}>
          ZEWA AFRICA
        </p>

        {/* 4. Subtitle (Optional, but adds polish) */}
        <p className={`text-center text-sm font-light text-green-400 mt-2 opacity-0 animate-fade-in-delay-more`}>
          Building a Circular Africa...
        </p>
      </div>

      {/* Custom Tailwind keyframes for better animation control (place this CSS externally or use a styled component library) */}
      <style jsx global>{`
        /* Define custom spin rates */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-fast {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        /* Define custom fade-in with delay */
        @keyframes fade-in-delay {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-fast 4s linear infinite;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 3s ease-in-out infinite;
        }
        .animate-fade-in-delay-more {
          animation: fade-in-delay 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;