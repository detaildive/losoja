'use client';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    const initializeWeb5 = async () => {
      
      const { Web5 } = await import('@web5/api/browser');

      try {
        const { web5, did } = await Web5.connect({sync: '5s'});
        console.log(did);
        if (web5 && did) {
          console.log('Web5 initialized');
          // await configureProtocol(web5, did);
        }
      } catch (error) {
        console.error('Error initializing Web5:', error);
      }
    };

    initializeWeb5();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
