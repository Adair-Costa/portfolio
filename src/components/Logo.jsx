// LABRARIES
import { Link } from 'react-router-dom';
import { useMain } from '../contexts/MainProvider';

function Logo() {
    const { darkModeActive } = useMain();

    return (
        <Link
            className={`font-logo sm:text-xl md:text-3xl ${darkModeActive === true ? 'logoLight text-colorLight' : 'logoDark text-colorDark'}`}
            to="#home"
        >
            A.C
        </Link>
    );
}

export default Logo;
