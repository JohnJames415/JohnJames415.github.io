'use client'

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './imageviewer.module.css'

export interface ImageProps {
  images: StaticImageData[];
}

const ImageViewer: React.FC<ImageProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.viewer}>
      <button onClick={goLeft} className={styles.button}>←</button>
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />
      <button onClick={goRight} className={styles.button}>→</button>
    </div>
  );
};


export default ImageViewer;
