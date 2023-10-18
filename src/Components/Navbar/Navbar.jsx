import styles from './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.navbar}>
        <button className={styles.button}>Inicio</button>
        <button className={styles.button}>Sobre mi</button>
        <button className={styles.button}>Proyectos</button>
        <button className={styles.button}>Contacto</button>
    </nav>
}

export default Navbar