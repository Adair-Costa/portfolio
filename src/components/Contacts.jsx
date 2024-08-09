import { useMain } from '../contexts/MainProvider';
import Title from './Title';
import SocialMediaBtns from './SocialMediaBtns';
import MyInfo from './MyInfo';
import Footer from './Footer';

function Contacts() {
    const { contactsRef, darkModeActive } = useMain();

    return (
        <section
            className={`flex flex-col items-center justify-center border-t-[1px] ${darkModeActive ? 'border-colorLight border-opacity-15 bg-backgroundColorLight text-colorLight' : 'border-colorDark border-opacity-15 bg-backgroundColorDark'} pt-20`}
            ref={contactsRef}
            style={{ height: '100vh' }}
        >
            <div className="flex w-full flex-col items-center justify-center px-4 sm:gap-[40px] md:gap-[72px]">
                <div className="flex flex-col items-center justify-center sm:gap-[4px] md:gap-[8px]">
                    <Title />
                </div>
                <div className="flex flex-col items-center justify-center sm:gap-[40px] md:gap-[72px]">
                    <div className="flex flex-wrap sm:items-center sm:justify-center sm:gap-[8px] md:gap-[16px]">
                        <SocialMediaBtns />
                    </div>
                    <div className="flex flex-col items-center justify-center sm:gap-[4px] md:gap-[8px]">
                        <MyInfo />
                    </div>
                    <Footer />
                </div>
            </div>
        </section>
    );
}

export default Contacts;
