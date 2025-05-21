import React from 'react';
import styles from './styles.module.css'
import NameBanner from '../components/namebanner';
import MainNav from '../components/mainnav';
import AboutMe from '../components/aboutme';
import Skills from '../components/skills';
import Education from '../components/education';
import Leadership from '../components/leadership';
import Projects from '../components/projects';
import Miscellaneous from '../components/miscellaneous';
import Contact from '../components/contact';
import Copyright from '../components/copyright';
const Main = () => {

  return (
    <div className={styles.background}>
    <NameBanner/>
    <MainNav/>
    <AboutMe/>
    <hr className={styles.linebreak}></hr>
    <Skills/>
    <hr className={styles.linebreak}></hr>
    <Education/>
    <hr className={styles.linebreak}></hr>
    <Leadership/>
    <hr className={styles.linebreak}></hr>
    <Projects/>
    <hr className={styles.linebreak}></hr>
    <Miscellaneous/>
    <hr className={styles.linebreak}></hr>
    <Contact/>
    <hr className={styles.linebreak}></hr>
    <Copyright/>
    </div>
  );
};

export default Main;
