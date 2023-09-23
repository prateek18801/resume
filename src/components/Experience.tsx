import HorizontalCard from './HorizontalCard';

const Experience = () => {

    const experiences = [
        {
            position: "Full-Stack Web Developer",
            company: "Big Data Centre of Excellence",
            location: "Remote, Uttar Pradesh",
            duration: "September 2021 - Present (Ongoing)",
            description: [
                "Created the official website backend and an administrative dashboard, a web-based attendance portal to track members' daily attendance, increasing productivity by 15%.",
                "Planned and conducted more than six events, including workshops, hackathons, and coding contests for college students, with an average of 250 participants per event."
            ]
        },
        {
            position: "Summer Trainee",
            company: "Indorama India Pvt. Ltd.",
            location: "On-Site, Uttar Pradesh",
            duration: "July 2023 - August 2023",
            description: [
                "Worked on the library management system using SQL, reducing the time it takes to process library transactions by 20%.",
                "Successfully implemented a new Agile workflow for the library management system.",
                "Analyzed how information technology integrates with manufacturing industries and identified potential improvements that could be made to current working processes, which could save the company revenue in the long run."
            ]
        }
    ];

    return (
        <section className='mb-5'>
            <h2 className='font-mono font-bold text-orange-500'>EXPERIENCE</h2>
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
