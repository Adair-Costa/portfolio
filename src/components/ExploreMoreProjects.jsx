// LIBRARIES
import { FaGithub } from 'react-icons/fa6';
import { useMain } from '../contexts/MainProvider';
import Button from './Button';

function ExploreMorePojects() {
    const { darkModeActive } = useMain();

    return (
        <div
            className={`flex items-center justify-center gap-1 font-body font-bold ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} underline sm:p-1 sm:text-[16px] md:p-2 md:text-[18px]`}
        >
            <Button to="https://github.com/Adair-Costa" target="_blank">
                Explore more here
            </Button>

            <FaGithub className="text-[16px]" />
        </div>
    );
}

export default ExploreMorePojects;
