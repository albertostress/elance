
import React from 'react';

export const AngolanPattern1 = ({ className = "" }) => (
  <div className={`absolute inset-0 opacity-5 ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <pattern id="angolan-pattern-1" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polygon points="40,10 60,35 40,60 20,35" fill="currentColor" className="text-gold-600" />
          <polygon points="20,35 40,60 20,85 0,60" fill="currentColor" className="text-earth-600" />
          <polygon points="60,35 80,60 60,85 40,60" fill="currentColor" className="text-earth-600" />
          <circle cx="40" cy="40" r="8" fill="currentColor" className="text-gold-700" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#angolan-pattern-1)" />
    </svg>
  </div>
);

export const AngolanPattern2 = ({ className = "" }) => (
  <div className={`absolute inset-0 opacity-5 ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <pattern id="angolan-pattern-2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <polygon points="30,5 50,25 30,45 10,25" fill="currentColor" className="text-gold-600" />
          <polygon points="15,15 25,25 15,35 5,25" fill="currentColor" className="text-earth-700" />
          <polygon points="45,15 55,25 45,35 35,25" fill="currentColor" className="text-earth-700" />
          <polygon points="30,35 40,45 30,55 20,45" fill="currentColor" className="text-moss-600" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#angolan-pattern-2)" />
    </svg>
  </div>
);

export const AngolanPattern3 = ({ className = "" }) => (
  <div className={`absolute inset-0 opacity-3 ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <pattern id="angolan-pattern-3" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <polygon points="50,10 70,30 50,50 30,30" fill="currentColor" className="text-gold-500" />
          <polygon points="30,30 50,50 30,70 10,50" fill="currentColor" className="text-earth-500" />
          <polygon points="70,30 90,50 70,70 50,50" fill="currentColor" className="text-earth-500" />
          <polygon points="50,50 70,70 50,90 30,70" fill="currentColor" className="text-moss-500" />
          <circle cx="50" cy="50" r="5" fill="currentColor" className="text-gold-800" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#angolan-pattern-3)" />
    </svg>
  </div>
);
