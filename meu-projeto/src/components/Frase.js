import styles from './Frase.module.css'

const Frase = ()=>{
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                Esse componente é uma frase
            </p>
        </div>
    )
}

export default Frase