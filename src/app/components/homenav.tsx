'use client'

import styles from "./homenav.module.css"
import { useRouter } from "next/navigation";

export default function MainNav() {
    const router = useRouter();
    
    const loadAndScrollToSection = (id: string) => {
        router.push('/main#' + id);
    };

    return (
    <nav className={styles.homenav}>
        <button onClick={() => loadAndScrollToSection("About-Me")}>About Me</button>
        <button onClick={() => loadAndScrollToSection("Skills")}>Skills</button>
        <button onClick={() => loadAndScrollToSection("Education")}>Education</button>
        <button onClick={() => loadAndScrollToSection("Leadership")}>Leadership</button>
        <button onClick={() => loadAndScrollToSection("Projects")}>Projects</button>
        <button onClick={() => loadAndScrollToSection("Miscellaneous")}>Miscellaneous</button>
        <button onClick={() => loadAndScrollToSection("Contact")}>Contact</button>
    </nav>
    );
}