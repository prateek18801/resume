import HorizontalCard from './HorizontalCard';

const Responsibilites = () => {

    const responsibilities = [
        {
            position: "Head Coordinator",
            company: "Big Data Centre of Excellence",
            location: "",
            duration: "November 2022 - Present (Ongoing)",
            description: [
                "Planned and organized more than six events, workshops, hackathons, and coding contests, average of 250 participants per event.",
                "Led a team of 6 developers to build a registrar portal and TnP cell portal for a college, streamlining the current processes."
            ]
        },
        {
            position: "Full-Stack Web Developer",
            company: "Big Data Centre of Excellence",
            location: "",
            duration: "September 2021 - October 2022",
            description: [
                "Built the official website backend and an administrative dashboard, a web-based attendance portal to track members' daily attendance. Registration forms for events with rate limiting and spam protection.",
            ]
        }
    ];

    return (
        <section className='mb-5'>
            <h2 className='font-mono font-bold text-orange-500'>POSITIONS OF RESPONSIBILITY</h2>
            {
                responsibilities.map(experience =>
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

export default Responsibilites;
