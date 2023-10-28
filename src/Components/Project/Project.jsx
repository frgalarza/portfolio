const Project = ({project}) => {
    return <article>
        <h3>{project.name}</h3>
        <figure>
            <figcaption>
                <p>{project.description}</p>
                <p>Tecnologias: {project.tech}</p>
            </figcaption>
            <footer><a href={project.githubLink} rel="noreferrer" target="_blank">Repositorio</a></footer>
        </figure>
    </article>
}

export default Project