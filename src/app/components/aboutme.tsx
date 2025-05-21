import React from 'react';
import Image from 'next/image'
import Headshot from '../../../public/images/Headshot2.jpg'
import styles from './aboutme.module.css'

export default function AboutMe() {
return (
<div id="About-Me">
    <h2 className="SectionTitle">About Me</h2>
    <div id={styles.AboutMeContentDiv}>
        <Image className={styles.image} src={Headshot} alt="John James Headshot"/>
        <p id={styles.InfoLine}>678-787-0533 &#9679; johnjames415@icloud.com &#9679; 3930 Sidesaddle Ct.</p>
        <p id={styles.Description}> 
            Hello! I&apos;m John James, a 21 year-old Computer Science student at the University of Georgia.
            I enjoy logical problem solving, creative expression, and working with people to achieve great things.
            Through my gathered experience and knowledge, I am ready to contribute to an ever-evolving industry.
        </p>
    </div>
</div>
);
}