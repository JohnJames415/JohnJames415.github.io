'use client'

import React from "react";
import styles from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Contact() {
  const router = useRouter();

  const contactLinkHandler = () => {
    router.push('/contact');
  };

    return(
    <div id="Contact">
        <h2 className="SectionTitle">Contact</h2>
        <p className={styles.p}>Email: johnjames415@icloud.com</p>
        <p className={styles.p}>Phone: 678-787-0533</p>
        <p className={styles.p}>Find me on relevant socials:</p>
        <div className={styles.linkcontainer}>
        <Link target="_blank" href={"https://github.com/JohnJames415"}><FontAwesomeIcon icon={faGithub} className={styles.github}/></Link>
        <Link target="_blank" href={"https://www.linkedin.com/in/john-james-633893323/"}><FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/></Link> 
        </div>
        <p className={styles.p}>Or send me a message <button className={styles.button} onClick={contactLinkHandler}>here.</button> </p>
    </div>
    )
}