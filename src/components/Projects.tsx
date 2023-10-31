import { FiLink2 } from 'react-icons/fi';

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
            url: "https://blocktrackers.shahbaz.tech/",
            description: "This system traces farm products from seed sowing till they reach the end customer. The system gathers information on the seed, fertilisers, transportation, etc. using sensors and IoT, and makes it available to the customer via QR Codes.",
            stack: "Nodejs, Ethereum, MongoDB",
            learnings: "Ethereum, Blockchain, IoT, Bootstrap"
        },
        {
            title: "TrackPatrol - Tool for monitoring ground personnel",
            url: "https://trackpatrol.shahbaz.tech/",
            description: "TrackPatrol is a system to track police personnel deployed on Bandobast Duties. It can be used for assigning, managing, real-time monitoring of police personnel and generating reports.",
            stack: "Nodejs, Reactjs, MongoDB, Tailwind, Typescript",
            learnings: "Tailwind, Typescript, Raspberry PI"
        },
        {
            title: "KisanAssist - Voice assisted contact centre for farmers",
            url: "https://prateek18801.github.io/kisan-assist/",
            description: "AI based voice assistant resolves problems faced by farmers. Farmers can log their problems via phone calls, SMS, or website to get a relevant voice response.",
            stack: "PWA, Reactjs, Nodejs, MongoDB, OpenAi GPT, Twilio",
            learnings: "Prompt Engineering, Web Speech API, Handling Calls and SMS on the Backend"
        }
    ];

    return (
        <section className='mb-5'>
            <h2 className='font-mono font-bold text-orange-500'>PROJECTS</h2>
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
        <div className='mb-2'>
            <div className='font-medium'>{title}</div>
            <a className='flex font-medium text-gray-600' href={url}>
                <FiLink2 className='my-auto mr-1 text-orange-500' />
                {url}
            </a>
            <ul className='ml-5 list-disc marker:text-gray-600'>
                <li>{description}</li>
                <li>Tech Stack: {stack}</li>
                <li>Key Learnings: {learnings}</li>
            </ul>
        </div>
    );
}

export default Projects;
