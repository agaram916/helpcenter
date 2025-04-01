'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'lightgallery/css/lightgallery.css';

const LightGallery = dynamic(() => import('lightgallery/react'), { ssr: false });

const TestVideoGallery = () => {
  return (
    <LightGallery>
    <a
      href="https://www.youtube.com/watch?v=6NoKGf3ebSQ"
      data-lg-size="1280-720"
      data-lg-video='{"source": [{"src":"https://www.youtube.com/watch?v=6NoKGf3ebSQ", "type":"youtube"}]}'
    >
      <img src="https://img.youtube.com/vi/6NoKGf3ebSQ/maxresdefault.jpg" alt="YouTube Video Thumbnail" />
    </a>
  </LightGallery>
  );
};

export default TestVideoGallery;
