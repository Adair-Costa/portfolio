// LABRARIES
import { NavLink } from 'react-router-dom';
import { useMain } from '../contexts/MainProvider';

function NavBar() {
    const { isOpen, handleNavigationClose, darkModeActive } = useMain();

    return (
        <nav
            className={`font-body ${darkModeActive === true ? 'navbarLight text-colorLight' : 'navbarDark text-colorDark'} flex gap-6 text-lg font-bold sm:flex-col sm:items-center sm:justify-center md:flex md:h-0 md:flex-row md:p-0 ${isOpen ? 'sm:h-[100vh]' : ''}`}
        >
            <NavLink to="/#about" onClick={handleNavigationClose}>
                About
            </NavLink>
            <NavLink to="/#projects" onClick={handleNavigationClose}>
                Projects
            </NavLink>
            <NavLink to="/#contacts" onClick={handleNavigationClose}>
                Contacts
            </NavLink>
        </nav>
    );
}

export default NavBar;
