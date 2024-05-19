import { FiLink2 } from "react-icons/fi";

type ProjectCardProps = {
    title: string,
    url: string,
    description: string,
    stack: string,
    learnings: string
};

const Projects = () => {

    const projects = [
        {
            title: "BlockTrackers - Blockchain based food supply chain tracking system",
            url: "https://blocktrackers.shahbaz42.live/",
            description: "This system traces farm products starting from seed sowing and makes it available to the customer via QR Codes.",
            stack: "Nodejs, Ethereum, MongoDB",
            learnings: "Ethereum, Blockchain, IoT, Bootstrap"
        },
        {
            title: "TrackPatrol - Tool for monitoring ground personnel",
            url: "https://trackpatrol-dashboard-dun.vercel.app/",
            description: "TrackPatrol is a system to track police personnel deployed on Bandobast Duties.",
            stack: "MERN, Tailwind, Typescript",
            learnings: "Tailwind, Typescript, Raspberry PI"
        },
        {
            title: "KisanAssist - Voice assisted contact centre for farmers",
            url: "https://prateek18801.github.io/kisan-assist/",
            description: "AI based voice assistant resolves problems faced by farmers.",
            stack: "PWA, MERN, OpenAi GPT, Twilio",
            learnings: "Web Speech API, Handling Calls and SMS on the Backend"
        }
    ];

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
            <ul className="ml-5 list-disc marker:text-gray-600">
                <li>{description}</li>
                <li>Tech Stack & Learnings: {stack}, {learnings}</li>
            </ul>
        </div>
    );
}

export default Projects;
