import React from "react";
import styles from "./education.module.css"

export default function Education() {
return(
<div id="Education">
    <h2 className="SectionTitle">Education</h2>
    <p className={styles.p}>
        University of Georgia, Franklin College of Arts and Sciences, 
        Bachelors of Science in Computer Science May 2026.
    </p>
    <p className={styles.p}>
        GPA: 4.00/4.00
    </p>
    <p className={styles.p}>Relevant Coursework</p>
    <ul className={styles.ul}>
        <li>Introduction to Computing and Programming</li>
        <li>Software Development</li>
        <li>Discrete Mathematics for Computer Science</li>
        <li>Introduction to Theory of Computing</li>
        <li>Web Programming</li>
        <li>Data Structures</li>
        <li>Computer Architecture and Organization</li>
        <li>Human-Computer Interaction</li>
        <li>Algorithms</li>
    </ul>
</div>
)
}