import HorizontalCard from "./HorizontalCard";
import t from "../config/static";

const Education = () => {

  const education = t.education;

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
