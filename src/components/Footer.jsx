import { useMain } from '../contexts/MainProvider';

function Footer() {
    const { darkModeActive } = useMain();

    return (
        <>
            <p
                className={`text-center font-body font-light ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[16px] md:text-[18px]`}
            >
                I&apos;m always excited to hear about new projects and ideas.
                Every great project starts with a <br />
                conversation. Contact me, and let&apos;s discuss how we can
                bring your ideas to life.
            </p>
            <p
                className={`text-center font-body font-light ${darkModeActive ? 'text-colorLight' : 'text-colorDark'} sm:text-[16px] md:text-[18px]`}
            >
                Desgined and developed by Adair Costa <br />
                &copy; Copyright {new Date().getFullYear()}. All right reserved
            </p>
        </>
    );
}

export default Footer;
