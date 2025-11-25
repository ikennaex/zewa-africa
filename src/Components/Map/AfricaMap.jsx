import React from 'react';

const AfricaMap = () => {

  const correctEmbedUrl = "https://www.google.com/maps/d/embed?mid=1ZGL3Ez0Dba5BF0VAmrHP3nco6Dny1o8&ehbc=2E312F"; 

  return (
    <div className="map-container" style={{ position: 'relative', height: '600px' }}>
      <iframe 
        src={correctEmbedUrl} 
        
        width="100%" 
        height="600" 
        // Standard React/JSX Attributes (camelCase)
        frameBorder="0" 
        style={{ border: 0 }} 
        allowFullScreen 
        aria-hidden="false" 
        tabIndex="0" 
        title="Africa Interactive Map" 
      ></iframe>
    </div>
  );
};

export default AfricaMap;

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ZGL3Ez0Dba5BF0VAmrHP3nco6Dny1o8&ehbc=2E312F" width="640" height="480"></iframe>