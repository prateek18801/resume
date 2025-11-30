import HorizontalCard from "./HorizontalCard";
import t from "../config/static";

const Experience = () => {

    const experiences = t.experiences;

    return (
        <section className="mb-5">
            <h2>EXPERIENCE</h2>
            {
                experiences.map(experience =>
                    <HorizontalCard
                        heading={experience.position}
                        subheading={experience.company}
                        location={experience.location}
                        duration={experience.duration}
                        description={experience.description}
                    />
                )
            }
        </section>
    );
}

export default Experience;
