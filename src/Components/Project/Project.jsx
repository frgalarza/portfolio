import ImageCarousel from "./ImageCarrousel/ImageCarrousel"
import styles from "./Project.module.css"
import { FaGithub } from "react-icons/fa";

const Project = ({project}) => {
    return <article className={styles.article}>
        <h3>{project.name}</h3>
        <figure>
            <ImageCarousel images={project.images} />
            <figcaption>
                <p>{project.description}</p>
                <p>Tecnologias: {project.tech}</p>
            </figcaption>
            <footer><a href={project.githubLink} rel="noreferrer" target="_blank" className={styles.a}><FaGithub /></a></footer>
        </figure>
    </article>
}

export default Project