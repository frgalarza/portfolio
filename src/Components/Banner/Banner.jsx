import foto from './img/foto-perfil.png'
import styles from './Banner.module.css'

const Banner = ()=> {
    return <header className={styles.header} id="banner">
        <div className={`${styles.divHeader} ${styles.headerItem}`}>
            <h1 className={`${styles.title} ${styles.headerItem}`}>Hola, soy Franco</h1>
            <h2 className={`${styles.h2} ${styles.headerItem}`}>Desarrollador Full Stack</h2>
            <p className={styles.headerItem}>Altamente eficiente en la resolución de errores y problemas, demostrando una capacidad excepcional para aplicar mis conocimientos de manera efectiva</p>
            <div className={styles.headerItem}>
                <a href="https://github.com/frgalarza" target='_blank' rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/franco-galarza-917923268/" target='_blank' rel="noreferrer">LinkedIn</a>
                <a href="https://drive.google.com/uc?export=download&id=1Xsjo9ezLGw1HCCm3t2iOJAe5ZO4lgd0M">CV</a>
            </div>
        </div>
        <figure>
            <img src={foto} alt="foto de perfil" className={styles.img}/>
        </figure>
    </header>
}

export default Banner