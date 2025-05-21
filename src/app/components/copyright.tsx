import styles from './copyright.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Copyright() {

    return (
        <div className={styles.footer}>
            <p className={styles.p}><FontAwesomeIcon icon={faCopyright}/> John James</p>
        </div>
    )
}