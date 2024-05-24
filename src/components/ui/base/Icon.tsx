import React from 'react';
import { IconType } from 'react-icons';

interface LinkComponentProps {
    url: string;
    icon: IconType;
    className?: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ url, icon: Icon, className }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-inherit no-underline"
        >
            <Icon className={`mr-2 ${className} `} />
        </a>
    );
};

export default LinkComponent;
