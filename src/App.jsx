// LIBRARIES
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import Main from './Pages/Main';
import NavigationDesktop from './components/NavigationDesktop';
import NavigationMobile from './components/NavigationMobile';

function App() {
    return (
        <>
            <div className="relative">
                <NavigationMobile />
                <NavigationDesktop />
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="*" element={<p>Not Found!</p>} /> */}
            </Routes>
        </>
    );
}

export default App;
