import HorizontalCard from './HorizontalCard';

const Experience = () => {

    const experiences = [
        {
          position: "Freelance Software Developer",
          company: "SND Digital Pvt. Ltd.",
          location: "Hybrid, Ghaziabad",
          duration: "January 2024 - Present (Ongoing)",
          description: [
            "Developed 3 softwares for shipment tracking, inventory management and production management.",
            "Leveraged insights gained from on-site visits to enhance understanding of e-commerce, shipping, and returns management, resulting in better integration of manual processes with software solutions for improved efficiency.",
          ],
        },
        {
          position: "Application Engineering Intern",
          company: "Fusionflow Technologies Pvt. Ltd.",
          location: "Remote, Hyderabad",
          duration: "December 2023 - Feburary 2024",
          description: [
            "Created POCs and demos for an API integration platform, demonstrating a strong understanding of OAuth2 and REST APIs.",
            "Gained experience working with Kafka, microservices architectures, Kong API Gateway, and microservice orchestration platforms.",
          ],
        },
        {
          position: "Full Stack Web Developer",
          company: "Glimpse Education Pvt. Ltd.",
          location: "Remote, Gurugram",
          duration: "October 2023 - December 2023",
          description: [
            "Designed and developed the company's landing page.",
            "Built back-end functionalities for data processing and address validation in large CSV files.",
          ],
        },
        {
          position: "Summer Intern",
          company: "Indorama India Pvt. Ltd.",
          location: "On-Site, Jagdishpur (UP)",
          duration: "July 2023 - August 2023",
          description: [
            "Developed and implemented SQL procedures and triggers.",
            "Observed how IT departments integrate with manufacturing operations and workflows. Gained valuable insights into corporate structure and interdepartmental collaboration. Participated in a field visit to the fertilizer manufacturing plant.",
          ],
        },
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
