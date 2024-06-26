import { Link } from "react-router-dom"
import styles from './styles.module.css'

function NavBar() {
    return (
        <>
        <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/"> Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/sobre"> Sobre</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contato"> Contato</Link>
        </li>
      </ul>
        </>
    )
}

export default NavBar