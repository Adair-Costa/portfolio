// LABRARIES
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

// COMPONENTS
import Button from './Button';
import { useMain } from '../contexts/MainProvider';

function SeeProjects() {
    const { projectsRef, scrollToSection } = useMain();
    const navigate = useNavigate();

    useEffect(() => {
        handleScroll();
        navigate('#home');
    }, []);

    function handleScroll() {
        scrollToSection(projectsRef);
        navigate('#projects');
    }

    return (
        <Button onClick={handleScroll} className="cursor-pointer">
            <span className="absolute bottom-3 right-0 flex items-center justify-center gap-2 pr-4 font-body text-lg font-normal underline sm:hidden md:inline-flex">
                See projects <GoArrowRight className="text-base" />
            </span>
        </Button>
    );
}

export default SeeProjects;
