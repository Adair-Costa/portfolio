// LABRARIES
import { MdOutlineLightMode } from 'react-icons/md';
import { LuMoonStar } from 'react-icons/lu';

// COMPONENTS
import Button from './Button';
import { useMain } from '../contexts/MainProvider';

function DarkModeBtn() {
    const { darkModeActive, setDarkModeActive } = useMain();

    function handleDarkMode() {
        setDarkModeActive((darkModeActive) => !darkModeActive);
    }

    return (
        <Button className="cursor-pointer" onClick={handleDarkMode}>
            <span
                className={`flex items-center justify-center p-2 ${darkModeActive === true ? 'text-colorLight' : 'text-colorDark'}`}
            >
                {darkModeActive === true ? (
                    <MdOutlineLightMode className="text-2xl" />
                ) : (
                    <LuMoonStar className="text-2xl" />
                )}
            </span>
        </Button>
    );
}

export default DarkModeBtn;
