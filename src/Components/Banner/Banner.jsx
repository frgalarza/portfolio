import foto from './img/recorte.jpg'
import styles from './Banner.module.css'

const Banner = ()=> {
    return <section className={styles.section}>
        <div>
            <h1>Franco Galarza</h1>
            <h2>Desarrollador Full Stack</h2>
            <p>Altamente eficiente en la resolución de errores y problemas, demostrando una capacidad excepcional para aplicar mis conocimientos de manera efectiva</p>
        </div>
        <div>
            <img src={foto} alt="foto de perfil" className={styles.img}/>
        </div>
    </section>
}

export default Banner