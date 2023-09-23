import HorizontalCard from "./HorizontalCard";

const Education = () => {

    const education = [
        {
            institution: "Dr. A.P.J. Abdul Kalam Technical University",
            degree: "Bachelor of Technology - B.Tech, Computer Science",
            location: "Ghaziabad, Uttar Pradesh",
            duration: "July 2020 - July 2024 (Expected)",
            description: [
                "Current SGPA (Avg.) - 8.6",
                "Courses: Data Structures, Algorithms, DBMS, OS, Software Engineering, Project Management",
                "Awarded for 100% attendance in 3rd and 5th semester."
            ]
        },
        {
            institution: "Aditya Birla Public School",
            degree: "Senior Secondary - Intermediate, Computer Science",
            location: "Jagdishpur, Uttar Pradesh",
            duration: "March 2019 - March 2020",
            description: [
                "Percentage - 95.2%",
                "Active member of Dramatics and Ecology club"
            ]
        }
    ];

    return (
        <section className='mb-5'>
            <h2 className='font-mono font-bold text-orange-500'>EDUCATION</h2>
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
