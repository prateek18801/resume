const Skills = () => {
    const skills = [
        "Reactjs",
        "Nextjs",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "SQL",
        "REST APIs",
        "Web Sockets",
        "Kafka",
        "Redis",
        "Microservices",
        "Typescript",
        "Javascript",
        "GO",
        "C/C++",
        "Tailwind",
        "Figma"
    ];

    return (
        <section className="mb-5">
            <h2>SKILLS</h2>
            <ul className="flex flex-wrap">
                {skills.map(skill => <li className="px-3 py-1 mt-1 mr-1 bg-gray-200 rounded-md">{skill}</li>)}
            </ul>
        </section>
    );
}

export default Skills;
