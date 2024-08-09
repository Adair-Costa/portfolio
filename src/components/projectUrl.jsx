// LIBRARIES
import { FaGithub } from 'react-icons/fa6';

// COMPONENTS
import ButtonRepo from './ButtonRepo';

function projectUrl({ project }) {
    return (
        <div className="flex items-center gap-2">
            <p className="text-colorDefault font-body font-bold sm:text-[16px] md:text-[18px]">
                Visit
            </p>
            <ButtonRepo url={project.url} target="_blank">
                <FaGithub className="text-colorDefault cursor-pointer" />
            </ButtonRepo>
        </div>
    );
}

export default projectUrl;
