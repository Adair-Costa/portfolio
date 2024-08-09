// LABRARIES
import { useMain } from '../contexts/MainProvider';
import { motion } from 'framer-motion';

function SpanButton({ children }) {
    const { darkModeActive } = useMain();

    const className = `font-body ${darkModeActive === true ? 'bg-colorLight text-backgroundColorLight border btnsLight' : 'bg-colorDark btnsDark border'} flex items-center justify-center gap-2 rounded-full px-4 sm:py-2 md:py-3 font-semibold text-backgroundColorDark`;

    return (
        <motion.span
            whileHover={{
                scale: 1.1,
                textShadow: `0px 0px 8px ${darkModeActive ? '#7C684B' : '#ECCCF2'}`,
                boxShadow: `0px 0px 8px ${darkModeActive ? '#7C684B' : '#ECCCF2'}`,
            }}
            className={className}
        >
            {children}
        </motion.span>
    );
}

export default SpanButton;
