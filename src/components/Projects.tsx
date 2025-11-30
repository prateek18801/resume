import { FiLink2 } from "react-icons/fi";
import t from "../config/static";

type ProjectCardProps = {
    title: string,
    url: string,
    description: string,
    stack: string,
    learnings: string
};

const Projects = () => {

    const projects = t.projects;

    return (
        <section className="mb-5">
            <h2>PROJECTS</h2>
            {
                projects.map(project =>
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        url={project.url}
                        description={project.description}
                        stack={project.stack}
                        learnings={project.learnings}
                    />
                )
            }
        </section>
    );
}

const ProjectCard = ({ title, url, description, stack, learnings }: ProjectCardProps) => {
    return (
        <div className="mb-2">
            <div className="font-semibold">{title}</div>
            <a className="flex font-medium text-gray-600 underline" href={url}>
                <FiLink2 className="my-auto mr-1 text-accent-color" />
                {url}
            </a>
            <ul className="ml-5 marker:text-gray-600 list-disc">
                <li>{description}</li>
                <li>Tech Stack & Learnings: {stack}, {learnings}</li>
            </ul>
        </div>
    );
}

export default Projects;
