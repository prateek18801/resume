const Skills = () => {
    const skills = ['C/C++', 'Javascript', 'Typescript', 'Reactjs', 'Nextjs', 'Nodejs', 'Expressjs', 'MongoDB', 'SQL', 'UI/UX Design', 'Figma'];

    return (
        <section className='mb-5'>
            <h2 className='font-mono font-bold text-orange-500'>SKILLS</h2>
            <ul className='flex flex-wrap'>
                {skills.map(skill => <li className='mr-1 mt-1 px-3 py-1 rounded-md bg-gray-200'>{skill}</li>)}
            </ul>
        </section>
    );
}

export default Skills;
