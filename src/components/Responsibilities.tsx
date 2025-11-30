import HorizontalCard from './HorizontalCard';
import t from '../config/static';

const Responsibilities = () => {

    const responsibilities = t.responsibilities;

    return (
        <section className='mb-5'>
            <h2>POSITIONS OF RESPONSIBILITY</h2>
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

export default Responsibilities;
