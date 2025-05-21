'use client';

import React, { useState } from 'react';
import styles from './projectdropdown.module.css';
import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface image {
    src: StaticImageData;
    alt: string;
}

export interface ProjectDetails {
  link: Url;
  bullets: string[];
  image: image;
}
interface ProjectDropdownProps {
  title: string;
  details: ProjectDetails;
}

const ProjectDropdown: React.FC<ProjectDropdownProps> = ({ title, details}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.menu}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles['menu-toggle']}
      >
        {isOpen ? `v ${title} ` : `> ${title} `}
      </button>
      <Link href={details.link} target='_blank' className={styles.link}><FontAwesomeIcon icon={faGithub} className={styles.fai}/></Link>
      <ul className={`${styles['menu-items']} ${isOpen ? styles.open : ''}`}>
        {details.bullets.map((string, index) => (
          <li key={index}>
            {string}
          </li>
        ))}
        <Image src={details.image.src} alt={`${details.image.alt}`} className={styles.image}></Image>
      </ul>
    </nav>
  );
};

export default ProjectDropdown;
