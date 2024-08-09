import { useMain } from '../contexts/MainProvider';

function Title() {
    const { darkModeActive } = useMain();

    return (
        <>
            <h1
                className={`font-body font-light ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[18px] md:text-[24px]`}
            >
                Let&apos;s Create Together?
            </h1>
            <h2
                className={`font-title font-bold ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[24px] md:text-[32px]`}
            >
                Contact Me!
            </h2>
        </>
    );
}

export default Title;
