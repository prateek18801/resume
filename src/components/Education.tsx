import HorizontalCard from "./HorizontalCard";

const Education = () => {

    const education = [
        {
            institution: "Dr. A.P.J. Abdul Kalam Technical University",
            degree: "Bachelor of Technology - B.Tech, Computer Science (SGPA 8.6)",
            location: "Ghaziabad, Uttar Pradesh",
            duration: "July 2020 - July 2024",
            description: []
        },
        {
            institution: "Aditya Birla Public School",
            degree: "Senior Secondary - Intermediate (95.2%)",
            location: "Jagdishpur, Uttar Pradesh",
            duration: "March 2019 - March 2020",
            description: []
        }
    ];

    return (
        <section className="mb-5">
            <h2>EDUCATION</h2>
            {
                education.map(edu =>
                    <HorizontalCard
                        heading={edu.institution}
                        subheading={edu.degree}
                        location={edu.location}
                        duration={edu.duration}
                        description={edu.description}
                    />
                )
            }
        </section>
    );
}

export default Education;
