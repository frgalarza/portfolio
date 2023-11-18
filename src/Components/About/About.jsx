import styles from "./About.module.css"

const About = () => {
    return <section id="about" className={styles.sectionAbout}>
        <div className={styles.divImg}>
            <img src="https://cdn-icons-png.flaticon.com/512/1688/1688400.png" alt="img-dev" />
        </div>
        <div className={styles.divText}>
            <h2 className={styles.h2}>Sobre Mí</h2>
            <p>Soy <strong>Desarrollador Full Stack</strong> y estudiante de Ingeniería en Sistemas. Desde joven supe que quería vivir de la tecnología, lo que me llevó a adentrarme en el desarrollo web, un mundo del cual estoy encantado por las miles de posibilidades en las que uno puede aventurarse.</p>
            <h3>Objetivos</h3>
            <p>Mi meta personal, por la que cada día me levanto a sacar la mejor versión de mí, es poder vivir del desarrollo de software. Poder formar una familia y sustentarme gracias a lo que me hace feliz.</p>
            <p>Mi meta profesional es especializarme en el desarrollo backend, además de formar parte de un equipo del cual pueda aprender todos los días.</p>
        </div>
    </section>
}

export default About