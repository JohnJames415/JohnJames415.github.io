import React from 'react';
import ProjectDropdown, { ProjectDetails} from './projectdropdown';
import BiscuitLogo from '../../../public/images/Biscuit Logo.png'
import SteamGameDealFinderImage from '../../../public/images/SteamDealFinder.png'
import UnixShellRemake from '../../../public/images/UnixShellRec.png'


export default function Projects() {
    const project1details: ProjectDetails =
        {
            link: "https://github.com/sloanfinger/biscuit",
            bullets: [
                "Worked in a team to develop Biscuit, a music review website created using React with Next.js.",
                "Implemented a database using MongoDB to store user information and review information.",
                "Created various React components using  a combination of HTML, Tailwind and TypeScript."
                ],
            image: {
                src: BiscuitLogo, 
                alt:'Biscuit Logo'
            },
        }
        const project2details: ProjectDetails =
        {
            link: "https://github.com/JohnJames415/cs1302-api-app",
            bullets: [
                "Developed a Java application where users can find deals on Steam games and convert the prices to another currency.",
                "Interacted with various protocols and libraries, such as HTTP and GSON, to contact external APIs and use their data.",
                "Used JavaFX to create a simple GUI for easy user navigation."
                ],
            image: {
                src: SteamGameDealFinderImage, 
                alt:'Steam Game Deal Finder Image'
            },
        }
        const project3details: ProjectDetails =
        {
            link: "https://github.com/JohnJames415/cs1730-unix-shell",
            bullets: [
                "Recreated the Unix shell's interface, commands, and functionality using C.",
                "Utilized various low-level system calls to facilitate I/O redirection, create new processes, and execute user-provided commands.",
                "Integrated additional system calls to replicate and navigate the user's directory structure."
                ],
            image: {
                src: UnixShellRemake, 
                alt:'Unix Shell Recreation Image'
            },
        }




return (
<div id="Projects">
    <h2 className='SectionTitle'>Projects</h2>
    <ProjectDropdown title="Biscuit - A Music Review Website" details={project1details}/>
    <ProjectDropdown title="Steam Game Deal Finder (Java)" details={project2details}/>
    <ProjectDropdown title="Unix Shell Recreation (C)" details={project3details}/>
</div>
);
}