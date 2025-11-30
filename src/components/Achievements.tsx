import t from "../config/static";

const Achievements = () => {

    const achievements = t.achievements;

    return (
        <section className="mb-5">
            <h2>ACHIEVEMENTS</h2>
            <ul className="ml-5 marker:text-gray-600 list-disc">
                {
                    achievements.map(achievement =>
                        <li className="mb-1"><span className="font-semibold">{achievement.title}</span> - {achievement.description}</li>
                    )
                }
            </ul>
        </section>
    );
}

export default Achievements;
