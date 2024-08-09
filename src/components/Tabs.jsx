// COMPONENTS
import { useMain } from '../contexts/MainProvider';
import Button from './Button';

function Tabs() {
    const { activeTab, setActiveTab, darkModeActive } = useMain();

    function handleWebDev() {
        setActiveTab('webDev');
    }

    function handleMobileDev() {
        setActiveTab('mobDev');
    }

    return (
        <div
            className={`flex gap-2 rounded-full border-2 ${darkModeActive ? 'border-colorLight bg-backgroundColorLight' : 'border-colorDark bg-backgroundColorDark'} p-1`}
        >
            <Button onClick={handleWebDev} className="cursor-pointer">
                <span
                    className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 font-body font-semibold ${darkModeActive ? 'text-backgroundColorLight' : 'text-colorDark'} ${activeTab === 'webDev' ? `${darkModeActive ? 'bg-colorLight text-backgroundColorLight' : 'text-colorDefault bg-colorDark'}` : `${darkModeActive ? 'text-colorLight' : ''}`}`}
                >
                    Web development
                </span>
            </Button>
            <Button onClick={handleMobileDev} className="cursor-pointer">
                <span
                    className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 font-body font-semibold ${darkModeActive ? 'text-backgroundColorLight' : 'text-colorDark'} ${activeTab === 'mobDev' ? `${darkModeActive ? 'bg-colorLight text-backgroundColorLight' : 'text-colorDefault bg-colorDark'}` : `${darkModeActive ? 'text-colorLight' : ''}`}`}
                >
                    Mobile development
                </span>
            </Button>
        </div>
    );
}

export default Tabs;
