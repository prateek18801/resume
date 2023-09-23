const Achievements = () => {

    const achievements = [
        {
            title: "Smart India Hackathon 2022 (Hardware Edition) Winner",
            description: "Asia's biggest hackathon conducted by MoE's Innovation Cell, developed a blockchain-based application to track farm produce, improving transparency and efficiency in the supply chain. Worked on the frontend and backend."
        },
        {
            title: "UNESCO India Africa Hackathon 2022 Runner Up",
            description: "International hackathon conducted in collaboration with 20+ countries, created a chatbot for farmers for resolving their queries. Worked on the frontend and backend."
        },
        {
            title: "Kavach Cybersecurity Hackathon 2023 Finalist",
            description: "Led a team to build Trackpatrol, a real-time police personnel tracking application, at the Cybersecurity Hackathon conducted in collaboration with BPR&D and I4C."
        }
    ];

    return (
        <>
            <h2 className='font-mono font-bold text-orange-500'>ACHIEVEMENTS</h2>
            <ul className='list-disc marker:text-gray-600 ml-5'>
                {
                    achievements.map(achievement =>
                        <li><span className='font-medium'>{achievement.title}</span> - {achievement.description}</li>
                    )
                }
            </ul>
        </>
    );
}

export default Achievements;
