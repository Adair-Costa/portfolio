// COMPONENTS
import ProjectName from './ProjectName';
import ProjectDescription from './ProjectDescription';
import ProjectTecks from './ProjectTecks';
import ProjectUrl from './projectUrl';

function Card({ project }) {
    return (
        <li className="overflow-hidden">
            <img
                className="rounded-t-lg sm:h-full sm:w-full xl:h-[238px] xl:w-[377px]"
                src={project.image}
                alt="Fast React Pizza Foto"
            />
            <div className="bg-backgroundColorDefault flex flex-col gap-4 rounded-b-lg p-4 hover:cursor-pointer sm:w-full xl:w-[377px]">
                <ProjectName project={project} />
                <ProjectDescription project={project} />
                <ProjectTecks project={project} />
                <ProjectUrl project={project} />
            </div>
        </li>
    );
}

export default Card;
