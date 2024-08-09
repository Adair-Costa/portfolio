// LABRARIES
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

// COMPONENTS
import { useMain } from '../contexts/MainProvider';
import Button from './Button';
import SpanButton from './SpanButton';
import Scroll from './Scroll';
import SeeProjects from './SeeProjects';

function Hero() {
    const { homeRef, contactsRef, scrollToSection, darkModeActive } = useMain();
    const navigate = useNavigate();

    useEffect(() => {
        handleScroll();
        navigate('#home');
    }, []);

    function handleScroll() {
        scrollToSection(contactsRef);
        navigate('#contacts');
    }

    return (
        <section
            className={`flex flex-col items-center justify-center gap-10 ${darkModeActive === true ? 'bg-backgroundColorLight text-colorLight' : 'bg-backgroundColorDark text-colorDark'} pt-20`}
            ref={homeRef}
            style={{ height: '100vh' }}
        >
            <div className="flex flex-col items-center justify-center gap-6 py-4 lg:mb-32">
                <h1 className="text-center font-title font-bold sm:w-[100%] sm:text-[24px] md:w-[70%] md:text-[32px]">
                    Hi, I am Adair Costa, a passionate web developer turning
                    ideas into interactive realities.
                </h1>
                <h2 className="bold text-center font-title opacity-80 sm:w-[100%] sm:px-1 sm:text-[18px] md:w-[50%] md:px-0 md:text-[24px]">
                    Welcome to my portfolio. Explore my journey in web
                    development.
                </h2>
                <p className="text-center font-body opacity-60 sm:w-[100%] sm:px-1 sm:text-[16px] md:w-[40%] md:px-0 md:text-[18px] md:text-lg">
                    A developer focused on delivering high-quality web
                    solutions.
                </p>
                <Button onClick={handleScroll} className="cursor-pointer">
                    <SpanButton>
                        Get in touch
                        <GoArrowRight className="text-base sm:hidden md:inline-block" />
                    </SpanButton>
                </Button>
            </div>
            <Scroll />
            <SeeProjects />
        </section>
    );
}

export default Hero;
