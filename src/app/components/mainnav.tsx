'use client'

import styles from "./mainnav.module.css"

export default function MainNav() {
    
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <nav className={styles.mainnav}>
        <button onClick={() => scrollToSection("About-Me")}>About Me</button>
        <button onClick={() => scrollToSection("Skills")}>Skills</button>
        <button onClick={() => scrollToSection("Education")}>Education</button>
        <button onClick={() => scrollToSection("Leadership")}>Leadership</button>
        <button onClick={() => scrollToSection("Projects")}>Projects</button>
        <button onClick={() => scrollToSection("Miscellaneous")}>Miscellaneous</button>
        <button onClick={() => scrollToSection("Contact")}>Contact</button>
    </nav>
    );
}