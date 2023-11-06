import styles from "./About.module.css"

const About = () => {
    return <section id="about" className={styles.sectionAbout}>
        <h2>Sobre Mí</h2>
        <p>Soy <strong>Desarrollador Full Stack</strong> y estudiante de Ingenieria en Sistemas. Desde joven supe que queria vivir de la tecnologia, lo que me llevo a adentrarme en el desarrollo web, mundo del cual estoy encantado por las miles de posibilidades en las que uno puede aventurarse</p>
        <h3>Mis fortalezas</h3>
        <ul>
            <li>Capacidad resolutiva</li>
            <li>Eficacia</li>
            <li>Adaptación a cualquier entorno de trabajo</li>
            <li>Proactividad</li>
            <li>Curiosidad</li>
        </ul>
    </section>
}

export default About