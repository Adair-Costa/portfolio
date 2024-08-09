import { Link } from 'react-router-dom';

function ButtonRepo({ children, url, target }) {
    function handleUrl() {
        window.location.href = url;
    }

    return (
        <Link onClick={handleUrl} target={target}>
            {children}
        </Link>
    );
}

export default ButtonRepo;
