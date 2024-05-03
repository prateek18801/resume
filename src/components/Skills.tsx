const Skills = () => {
    const skills = [
        'Reactjs',
        'NextJS',
        'Nodejs',
        'Expressjs',
        'MongoDB',
        'SQL',
        'REST APIs',
        'Web Sockets',
        'Puppeteer',
        'Cheerio',
        'Kafka',
        'Typescript',
        'Javascript',
        'C/C++',
        'Tailwind',
        'Figma'
    ];

    return (
        <section className='mb-5'>
            <h2 className='font-mono font-bold text-orange-500'>SKILLS</h2>
            <ul className='flex flex-wrap'>
                {skills.map(skill => <li className='px-3 py-1 mt-1 mr-1 bg-gray-200 rounded-md'>{skill}</li>)}
            </ul>
        </section>
    );
}

export default Skills;
