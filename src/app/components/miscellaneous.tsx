import React from "react";
import Link from "next/link";
import styles from "./miscellaneous.module.css"
import ImageViewer from "./imageviewer";
import { StaticImageData } from 'next/image';
import PR4 from '../../../public/images/AthensPR4.png'
import PR5 from '../../../public/images/FinalAthensPR5V1.png'
import PR3 from '../../../public/images/PR3Final.png'
import PR6 from '../../../public/images/AthensPR6Final.png'


export default function Miscellaneous() {
    const athensPRImages: StaticImageData[] = [PR3, PR4, PR5, PR6];


return(
<div id="Miscellaneous">
    <h2 className="SectionTitle">Miscellaneous</h2>
    <hr className={styles.hr}></hr>
    <h3 className={styles.h3}>
        Graphics
    </h3>
    <p className={styles.p}>
        In my time of being a part of UGAEsports, I have created a number of high-quality graphics to highlight 
        local esports talent. Some of these can be seen below:
    </p>
    <ImageViewer images={athensPRImages}/>
    <hr className={styles.hr}></hr>
    <h3 className={styles.h3}>
        Smaller Projects
    </h3>
    <p className={styles.p}>
        I have also created many small-scale projects, which can be downloaded <Link className={styles.link} href={'/files/JavaCode.zip'} download='JavaCode.zip'> here.</Link>
    </p>
    <p className={styles.p}>
        These projects demonstrate fundamental concepts in Java.
    </p>
    <hr className={styles.hr}></hr>
    <h3 className={styles.h3}>
        Credits
    </h3>
    <p className={styles.p}>
        Some external assets were used to create this website.    
    </p>
    <ul className={styles.ul}>
        <li>
        <Link className={styles.link} href={'https://www.youtube.com/watch?v=nSn_CdNxJFw'} target='_blank'>  
        Clean Star-Field ~ TikTok Galaxy Travel ~60:00 Minutes~ Longest FREE HD UHD Motion Background AA-vfx.
        </Link>
        </li>
        <li>
        <Link className={styles.link} href={'https://www.goodfon.com/abstraction/wallpaper-colorful-neon-trails-dynamic-energy-galaxy-futuristic-cosmic.html'} target='_blank'>
        Abstraction (Contact Page Background).
        </Link>
        </li>
        <li>
        <Link className={styles.link} href={'https://www.hdwallpapers.net/space/purple-nebula-wallpaper-712.htm'} target='_blank'>
        Purple Nebula Wallpaper.
        </Link>
        </li>
    </ul>
    <p className={styles.p}>
        These assets were freely provided and/or under a Creative Commons license.   
    </p>
    
</div>
)
}