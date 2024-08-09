import { useMain } from '../contexts/MainProvider';

function MyInfo() {
    const { darkModeActive } = useMain();

    return (
        <>
            <h3
                className={`font-title font-bold ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[24px] md:text-[32px]`}
            >
                Adair Costa
            </h3>
            <p
                className={`font-body font-light ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} opacity-75 sm:text-[16px] md:text-[18px]`}
            >
                Web Developer
            </p>
        </>
    );
}

export default MyInfo;
