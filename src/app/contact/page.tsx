'use client';

import Copyright from "../components/copyright";
import styles from "./styles.module.css"
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const router = useRouter();

  const returnHandler = () => {
    router.push('/');
  };

  return (
    <div className={styles.background}>
        <div className={styles.nameContainer}>
        <button className={styles.homeButton} onClick={returnHandler}>
            <FontAwesomeIcon className={styles.house} icon={faHouse} /> 
            <p className={styles.subtext}>Homepage</p> 
        </button>
        <h1 className={styles.name}>Contact John James</h1>
        <button className={styles.filler}>
            <FontAwesomeIcon className={styles.house} icon={faHouse} /> 
            <p className={styles.subtext}>Homepage</p> 
        </button>
        
    </div>
        <form className={styles.formContainer} action="mailto:johnjames415@icloud.com" method="post" encType="text/plain">
            <label>Name:</label>
            <input className={styles.smallInput} type="text" id="name" name="name"></input>                
            <label>Email:</label>
            <input className={styles.smallInput} type="email" id="email" name="email" required></input>
            <label>Message:</label>
            <textarea name="message" rows={8} cols={24} className={styles.bigInput} required></textarea>
            <input className={styles.button} type="submit" value="Submit" id="sub_button"></input>
        </form>
    <div>
        <Copyright/>
    </div>
    </div>
  );
}
