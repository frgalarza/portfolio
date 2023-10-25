import styles from './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.navbar}>
        <ul className={styles.navigation}>
            <li><a href="#banner" className={styles.a}>Inicio</a></li>
            <li><a href="#about" className={styles.a}>Sobre mi</a></li>
            {/* <li><a href="#" className={styles.a}>Proyectos</a></li>
            <li><a href="#" className={styles.a}>Contacto</a></li> */}
        </ul>  
    </nav>
}

export default Navbar