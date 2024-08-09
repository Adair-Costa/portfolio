import { Link } from 'react-router-dom';

function Button({ children, onClick, to, target, className, href, download }) {
    if (to)
        return (
            <Link to={to} target={target}>
                {children}
            </Link>
        );

    if (download)
        return (
            <a href={href} download={download}>
                {children}
            </a>
        );

    return (
        <a className={className} onClick={onClick}>
            {children}
        </a>
    );
}

export default Button;
