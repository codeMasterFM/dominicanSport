import React, { useEffect } from 'react';

const Adds = () => {
  useEffect(() => {
    const atOptions = {
      'key': 'f2598a562fafcf083cc47a3cb82e6114',
      'format': 'iframe',
      'height': 60,
      'width': 468,
      'params': {}
    };
    const script = document.createElement('script');
    script.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://pollingramblefunctions.com/f2598a562fafcf083cc47a3cb82e6114/invoke.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ad-banner">
      <div id="ad-container"></div>
      <div>Adds</div>
    </div>
  );
};

export default Adds;
