// LIBRARIES
import { LuMoonStar } from 'react-icons/lu';
import { FiDownload } from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';

// COMPONENTS
import Button from './Button';
import SpanButton from './SpanButton';
import resume from '../assets/images/resume.pdf';
import { useMain } from '../contexts/MainProvider';

function DownloadAndDark() {
    const { darkModeActive, setDarkModeActive } = useMain();

    function handleDarkMode() {
        setDarkModeActive((darkModeActive) => !darkModeActive);
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <Button
                className="cursor-pointer"
                href={resume}
                download="resume.pdf"
            >
                <SpanButton>
                    Download cv <FiDownload className="text-base" />
                </SpanButton>
            </Button>
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
        </div>
    );
}

export default DownloadAndDark;
