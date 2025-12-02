import React from "react";
import { logo } from "../../imports";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-customGreen/90">
      {/* Centered Container */}
      <div className="flex flex-col items-center justify-center space-y-6">
        
        {/* Animated Rings + Logo */}
        <div className="relative w-64 h-64">

          {/* Logo */}
          <div className="absolute inset-6 rounded-full p-2 flex items-center justify-center">
            <img
              src={logo}
              alt="ZEWA Africa Logo"
              className="w-full h-full object-contain transform scale-105"
            />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-fast {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-fast 2s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;
