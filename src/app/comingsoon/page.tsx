// app/comingsoon/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

const Comingsoon = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setLoading(false), 500); 
    }, 300); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }
  const router = useRouter();

  return (
    <>
    <div className='container'>
      <div className='d-flex justify-content-start align-items-start'>
         <button className=" mt-4 back-btn" onClick={() => router.back()}>Back</button>
      </div>
        
      </div>
      <div className="container mt-5">
        
        <div className="comingsoon d-flex flex-column justify-content-center align-items-center">
          <img src="../image/Agaram_logo.jpg" style={{ width: 100 }} alt="Agaram Logo"  className='comingsoon-logo'/>
          <h1>Coming Soon</h1>
          <a href="https://support.agaramtech.com/" target="_blank" rel="noopener noreferrer">More Questions</a>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;
