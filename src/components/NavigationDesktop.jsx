// COMPONENTS
import Logo from './Logo';
import NavBar from './NavBar';
import DownloadAndDark from './DownloadAndDark';
import { useMain } from '../contexts/MainProvider';

function NavigationDesktop() {
    const { darkModeActive } = useMain();

    return (
        <div
            className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 sm:hidden md:flex ${darkModeActive === true ? 'bg-backgroundColorLight' : 'bg-backgroundColorDark'}`}
        >
            <Logo />
            <NavBar />
            <DownloadAndDark />
        </div>
    );
}

export default NavigationDesktop;
