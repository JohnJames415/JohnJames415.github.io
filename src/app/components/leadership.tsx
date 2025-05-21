import React from "react";
import styles from "./leadership.module.css"

export default function Leadership() {
return(
<div id="Leadership">
    <h2 className="SectionTitle">Leadership</h2>
    <hr className={styles.hr}></hr>
    <h3 className={styles.h3}>
        UGAEsports (Sept 2023 - Present)
    </h3>
    <h4 className={styles.h4}> UGA Smash - Head Tournament Organizer (Dec 2024 - Present) </h4>
    <ul className={styles.ul}>
        <li>
            Executed weekly large-scale Super Smash Bros. tournaments with up to 80+ participants,
            managing all logistics including bracket seeding, real-time bracket execution, live stream
            updates, and prize-pool distribution. 
        </li>
        <li>
            Promoted weekly events on social media using high-quality graphics , increasing 
            scene engagement and tournament attendance year-over-year.
        </li>
        <li>
            Assisted with back end tournament planning and development, including event
            scheduling, logistics for special events, and determining the semesterly official 
            player rankings.
        </li>
    </ul>
    <h4 className={styles.h4}> UGA Smash - Assistant Tournament Organizer (August 2024 - Dec 2024) </h4>
    <ul className={styles.ul}>
        <li>
            Arrived at tournament venues early and assisted in setting up any necessary equipment.
        </li>
        <li>
            Worked with a passionate team of individuals to promote the esports scene at the 
            University of Georgia, and build a strong community around common interests.
        </li>
    </ul>
    <h4 className={styles.h4}> UGA Smash - Social Media & PR Manager (Sep 2023 - Present) </h4>
    <ul className={styles.ul}>
        <li>
            Created several high-quality graphics to promote UGAEsports events and local 
            esports talent.
        </li>
        <li>
            Managed the UGAEsports official X account by creating posts that summarize 
            our weekly events.
        </li>
    </ul>
     <hr className={styles.hr}></hr>
    <h3 className={styles.h3}> The Kroger Company (Nov 2021 - Jun 2022) </h3>
    <h4 className={styles.h4}> E-Commerce Clerk (Nov 2021 - Jun 2022) </h4>
    <ul className={styles.ul}>
        <li>
            Responded to online grocery orders and prepared them for customer pickup.
        </li>
        <li>
            Interacted with the local community daily, and made consistent efforts to promote 
            the Kroger brand.
        </li>
        <li>
            Trained new hires by teaching them how to operate various technological devices 
            and how to complete necessary department tasks.
        </li>
    </ul>
</div>
)
}