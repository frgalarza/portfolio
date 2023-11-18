import Project from "../Project/Project"
import styles from "./Projects.module.css"

const Projects = ({projects}) => {

    return <section id="projects" className={styles.section}>
        <h2 className={styles.title}>Mis proyectos</h2>
        {projects.map(project => <Project key={project.id} project={project} />)}
    </section>
}

export default Projects