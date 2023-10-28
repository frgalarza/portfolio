import Project from "../Project/Project"

const Projects = ({projects}) => {

    return <section>
        {projects.map(project => <Project key={project.id} project={project} />)}
    </section>
}

export default Projects