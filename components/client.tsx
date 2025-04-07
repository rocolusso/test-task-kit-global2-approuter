'use client';

import React, { useEffect } from 'react';

function Client() {
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    setIsLoading(true);
    const interval = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {isLoading && ('Loading...')}
      {!isLoading && (<div>LOADED</div>)}
    </div>
  );
}

export default Client;
