// LIBRARIES
import { FaFigma } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa6';
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

// COMPONENTS
import { useMain } from '../contexts/MainProvider';

function Tecks() {
    const { darkModeActive } = useMain();

    return (
        <section
            className={`flex flex-wrap items-center justify-between p-4 font-body ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:gap-2 sm:font-light md:mt-10 md:gap-5 md:font-bold`}
        >
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <FaFigma />
                </span>
                <p>Figma</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <FaHtml5 />
                </span>
                <p>HTML</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <IoLogoCss3 />
                </span>
                <p>CSS</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <RiJavascriptFill />
                </span>
                <p>JavaScript</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <FaGithub />
                </span>
                <p>Github</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <FaBootstrap />
                </span>
                <p>BootStrap</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <RiTailwindCssFill />
                </span>
                <p>Tailwind</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <FaReact />
                </span>
                <p>React</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <FaNodeJs />
                </span>
                <p>Node</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base md:text-lg">
                    <SiExpress />
                </span>
                <p>Express</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className="sm:text-base lg:text-lg">
                    <DiMongodb />
                </span>
                <p>Mongo</p>
            </div>
        </section>
    );
}

export default Tecks;
