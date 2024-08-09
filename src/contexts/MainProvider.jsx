// LABRARIES
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// CREATE A CONTEXT
const MainContext = createContext();

function MainProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('webDev');
    const [darkModeActive, setDarkModeActive] = useState(false);

    // Create refs for each section
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    // Use useLocation to listen for changes in the URL
    const location = useLocation();

    useEffect(
        function () {
            // Determine which section to scroll to based on the URL hash
            switch (location.hash) {
                case '#home':
                    scrollToSection(homeRef);
                    break;
                case '#about':
                    scrollToSection(aboutRef);
                    break;
                case '#projects':
                    scrollToSection(projectsRef);
                    break;
                case '#contacts':
                    scrollToSection(contactsRef);
                    break;
                default:
                    throw new Error('Unknown section!');
            }
        },
        [location.hash]
    ); // Run effect when the hash in the URL changes

    // Function to scroll to the referenced section
    function scrollToSection(sectionRef) {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    function handleNavigationOpen() {
        setIsOpen((isOpen) => !isOpen);
    }

    function handleNavigationClose() {
        setIsOpen(false);
    }

    return (
        <MainContext.Provider
            value={{
                isOpen,
                setIsOpen,
                handleNavigationOpen,
                handleNavigationClose,
                scrollToSection,
                location,
                homeRef,
                aboutRef,
                projectsRef,
                contactsRef,
                activeTab,
                setActiveTab,
                darkModeActive,
                setDarkModeActive,
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

function useMain() {
    const context = useContext(MainContext);

    if (context === undefined)
        throw new Error('MainContext used outside of the MainProvider');
    return context;
}

export { MainProvider, useMain };
