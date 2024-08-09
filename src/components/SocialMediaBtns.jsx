import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';

import Button from './Button';
import SpanButton from './SpanButton';

function SocialMediaBtns() {
    return (
        <>
            <Button
                to="https://www.linkedin.com/in/adair-costa/"
                target="_blank"
            >
                <SpanButton>
                    <FaLinkedinIn className="sm:hidden md:inline-block" />
                    Linkedin
                </SpanButton>
            </Button>
            <Button to="https://github.com/Adair-Costa" target="_blank">
                <SpanButton>
                    <FaGithub className="sm:hidden md:inline-block" />
                    Github
                </SpanButton>
            </Button>
            <Button to="https://x.com/aldairsalvador3" target="_blank">
                <SpanButton>
                    <BsTwitterX className="sm:hidden md:inline-block" />
                    Twitter
                </SpanButton>
            </Button>
        </>
    );
}

export default SocialMediaBtns;
