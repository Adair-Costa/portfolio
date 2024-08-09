// LIBRARIES
import { useMain } from '../contexts/MainProvider';

// COMPONENTS
import CardList from './CardList';
import ExploreMoreProjects from './ExploreMoreProjects';
import Tabs from './Tabs';

function Projects() {
    const { projectsRef, activeTab, darkModeActive } = useMain();

    return (
        <section
            className={`flex flex-col items-center justify-center border-t-[1px] ${darkModeActive ? 'border-colorLight border-opacity-15 bg-backgroundColorLight' : 'border-colorDark border-opacity-15 bg-backgroundColorDark'} pt-20`}
            ref={projectsRef}
        >
            <div className="flex flex-col items-center justify-center px-4 sm:gap-4 md:gap-6">
                <h1
                    className={`font-title ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[24px] md:text-[32px]`}
                >
                    Projects
                </h1>
                <p
                    className={`text-center font-body ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} opacity-75 sm:text-[16px] md:w-[692px] md:text-[18px]`}
                >
                    Discover the projects that highlight my journey in web
                    development and my commitment to pushing the boundaries of
                    technology.
                </p>
                <Tabs />
                {activeTab === 'webDev' ? (
                    <CardList />
                ) : (
                    <p
                        className={`text-center font-title ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[24px] md:pb-3 md:text-[32px]`}
                    >
                        This page is not yet implemented 😁
                    </p>
                )}
                {activeTab === 'webDev' ? <ExploreMoreProjects /> : ''}
            </div>
        </section>
    );
}

export default Projects;
