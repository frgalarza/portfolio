import Project from "../Project/Project"

const Projects = ({projects}) => {

    return <section id="projects">
        {projects.map(project => <Project key={project.id} project={project} />)}
    </section>
}

export default Projects