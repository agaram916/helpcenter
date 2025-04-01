'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ imgSrc, linkTo, imgClassName, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      className={`media h-full text-base transition-fast flex-column align-items-center ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card media-body-card w-100">
        <Image
          src={imgSrc}
          className={`card-img-top ${imgClassName}`}
          alt={title}
        />
        <div className="card-footer media-footer">
          <h5>
            <Link href={linkTo}>{title}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
