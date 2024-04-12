import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './footer.module.css'

function Footer(){
    return(
        <>
        <footer>
            <ul className={styles.list}>
                <li className={styles.item}><FaFacebook></FaFacebook></li>
                <li className={styles.item}><FaInstagram></FaInstagram></li>
                <li className={styles.item}><FaLinkedin></FaLinkedin></li>
            </ul>
        </footer>
        </>
    )
}

export default Footer