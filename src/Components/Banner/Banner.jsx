import foto from './img/recorte.jpg'
import styles from './Banner.module.css'

const Banner = ()=> {
    return <header className={styles.header}>
        <div className={styles.divHeader}>
            <h1 className={styles.title}>Hola, soy Franco</h1>
            <h2 className={styles.h2}>Desarrollador Full Stack</h2>
            <p>Altamente eficiente en la resolución de errores y problemas, demostrando una capacidad excepcional para aplicar mis conocimientos de manera efectiva</p>
        </div>
        <div>
            <img src={foto} alt="foto de perfil" className={styles.img}/>
        </div>
    </header>
}

export default Banner