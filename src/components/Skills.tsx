import t from "../config/static";

const Skills = () => {

  const skills = t.skills;

  return (
    <section className="mb-5">
      <h2>SKILLS</h2>
      <ul className="flex flex-wrap">
        {skills.map(skill => <li className="bg-gray-200 mt-1 mr-1 px-3 py-1 rounded-md">{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;
