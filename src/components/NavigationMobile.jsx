// LABRARIES
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

// COMPONENTS
import Logo from './Logo';
import Button from './Button';
import { useMain } from '../contexts/MainProvider';
import NavBar from './NavBar';
import DarkModeBtn from './DarkModeBtn';

function NavigationDesktop() {
    const { handleNavigationOpen, isOpen, darkModeActive } = useMain();

    return (
        <>
            <div
                className={`fixed left-0 right-0 top-0 flex flex-col ${darkModeActive === true ? 'bg-backgroundColorLight' : 'bg-backgroundColorDark'} px-4 py-4 sm:z-50 md:z-auto`}
            >
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center justify-center gap-[16px]">
                        <DarkModeBtn />
                        <Button onClick={handleNavigationOpen}>
                            <span
                                className={`flex items-center justify-center p-2 ${darkModeActive ? 'text-colorLight' : 'text-colorDark'}`}
                            >
                                {isOpen ? (
                                    <IoClose className="text-2xl" />
                                ) : (
                                    <IoMenu className="text-2xl" />
                                )}
                            </span>
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    {isOpen && <NavBar />}
                </div>
            </div>
        </>
    );
}

export default NavigationDesktop;
