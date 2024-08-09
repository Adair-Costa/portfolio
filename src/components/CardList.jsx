// COMPONENTS
import Card from './Card';
import projects from '../../utils/cards';

function CardList() {
    return (
        <ul className="flex flex-wrap items-center justify-center gap-4">
            {projects.map((project, index) => (
                <Card project={project} key={index} />
            ))}
        </ul>
    );
}

export default CardList;
