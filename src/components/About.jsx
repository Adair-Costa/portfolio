// LIBRARIES
import { motion } from 'framer-motion';

// COMPONENTS
import { useMain } from '../contexts/MainProvider';
import fotoProfileDark from '../assets/images/foto-profile-dark.png';
import fotoProfileLight from '../assets/images/foto-profile-light.png';
import Tecks from './Tecks';
import AboutMe from './AboutMe';
import EducationalBackground from './EducationalBackground';
import Experiences from './Experiences';
import CompletedProjects from './CompletedProjects';
import Contribuitions from './Contribuitions';

function About() {
    const { aboutRef, darkModeActive } = useMain();

    return (
        <section
            className={`flex flex-col justify-center border-t-[1px] sm:h-[100%] md:h-[100vh] ${darkModeActive ? 'border-colorLight border-opacity-15 bg-backgroundColorLight' : 'border-colorDark border-opacity-15 bg-backgroundColorDark'} p-4 pt-20`}
            ref={aboutRef}
            // style={{ height: '100vh' }}
        >
            <div className="flex items-center justify-center sm:mb-5 md:mb-10">
                <h1
                    className={`w-[644px] text-center font-title font-bold ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[24px] md:text-[32px]`}
                >
                    &quot;Empowering Businesses Through Technology&quot;
                </h1>
            </div>
            <div className="flex items-center justify-between sm:flex-col md:flex-row md:gap-6">
                <div
                    className={`flex flex-col sm:gap-5 md:w-[800px] md:gap-10 ${darkModeActive ? 'text-colorLight' : 'text-colorDark'}`}
                >
                    <div className="flex flex-col flex-wrap gap-4">
                        <AboutMe />
                    </div>
                    <div className="flex flex-col gap-4">
                        <EducationalBackground />
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <Experiences />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <CompletedProjects />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <Contribuitions />
                        </div>
                    </div>
                </div>
                <div className="sm:order-first sm:hidden sm:w-[35%] md:order-1 md:inline-block md:w-auto">
                    <img
                        src={
                            darkModeActive ? fotoProfileLight : fotoProfileDark
                        }
                        alt="Foto Profile"
                    />
                </div>
            </div>
            <Tecks />
        </section>
    );
}

export default About;
