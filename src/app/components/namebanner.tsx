'use client'

import React from 'react';
import styles from './namebanner.module.css';
import { useRouter } from 'next/navigation';

const NameBanner = () => {
  const router = useRouter();

  const nameButtonHandler = () => {
    router.push('/');
  };


  return (
    <div>
     <video
        id={styles.bannerVid}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/BackgroundNebulaFade.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id={styles.bannerContainer}>
        <button id={styles.bannerName} onClick={nameButtonHandler}>John James</button>
      </div>
    </div>
  );
};

export default NameBanner;
