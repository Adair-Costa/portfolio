// LABRARIES
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// COMPONENTS
import ScrolImageDark from '../assets/images/scroll-dark.png';
import ScrollImageLight from '../assets/images/scroll-light.png';
import { useMain } from '../contexts/MainProvider';

function Scroll() {
    const { aboutRef, scrollToSection, darkModeActive } = useMain();
    const navigate = useNavigate();

    useEffect(() => {
        handleScroll();
        navigate('#home');
    }, []);

    function handleScroll() {
        scrollToSection(aboutRef);
        navigate('#about');
    }

    function tecksVariants(duration) {
        return {
            initial: { y: -5 },
            animate: {
                y: [5, -5],
                transition: {
                    duration: duration,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'reverse',
                },
            },
        };
    }

    return (
        <motion.div
            variants={tecksVariants(0.5)}
            initial="initial"
            animate="animate"
        >
            <img
                className="cursor-pointer"
                src={darkModeActive ? ScrollImageLight : ScrolImageDark}
                alt="Scroll Image"
                onClick={handleScroll}
            />
        </motion.div>
    );
}

export default Scroll;
