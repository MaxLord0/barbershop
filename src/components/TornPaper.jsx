import React from 'react';

const TornPaper = ({ position = 'bottom', theme = 'dark' }) => {
  const isTop = position === 'top';
  const fillColor = theme === 'light' ? 'fill-shaver-white' : 'fill-shaver-black';
  
  return (
    <div className={`w-full overflow-hidden leading-[0] ${isTop ? 'rotate-180 -mt-[1px]' : '-mb-[1px]'} z-10 relative bg-transparent`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 40" 
        preserveAspectRatio="none"
        className={`relative block w-[calc(100%+1.3px)] h-[30px] md:h-[40px] ${fillColor}`}
      >
        <path d="M0,0 L0,40 L1200,40 L1200,0 L1180,15 L1160,0 L1140,20 L1120,5 L1100,18 L1080,2 L1060,25 L1040,10 L1020,20 L1000,5 L980,18 L960,2 L940,25 L920,10 L900,20 L880,5 L860,18 L840,2 L820,25 L800,10 L780,20 L760,5 L740,18 L720,2 L700,25 L680,10 L660,20 L640,5 L620,18 L600,2 L580,25 L560,10 L540,20 L520,5 L500,18 L480,2 L460,25 L440,10 L420,20 L400,5 L380,18 L360,2 L340,25 L320,10 L300,20 L280,5 L260,18 L240,2 L220,25 L200,10 L180,20 L160,5 L140,18 L120,2 L100,25 L80,10 L60,20 L40,5 L20,18 Z" />
      </svg>
    </div>
  );
};

export default TornPaper;
