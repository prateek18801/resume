const Achievements = () => {

    const achievements = [
        {
            title: "Smart India Hackathon 2022 Winner",
            description: "Developed an application to track farm produce, improving transparency in the supply chain."
        },
        {
            title: "UNESCO India Africa Hackathon 2022 Runner Up",
            description: "Created a PWA chatbot for farmers to resolve their queries."
        },
        {
            title: "Kavach Cybersecurity Hackathon 2023 Finalist",
            description: "Led a team to build a police personnel tracking application made it to the top 3."
        }
    ];

    return (
        <section className="mb-5">
            <h2 className='font-mono font-bold text-orange-500'>ACHIEVEMENTS</h2>
            <ul className='ml-5 list-disc marker:text-gray-600'>
                {
                    achievements.map(achievement =>
                        <li className='mb-1'><span className='font-medium'>{achievement.title}</span> - {achievement.description}</li>
                    )
                }
            </ul>
        </section>
    );
}

export default Achievements;
