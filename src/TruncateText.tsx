import React, { useState } from 'react';
import EllipsisIcon from './EllipsisIcon';
import './TruncateText.css';

interface TruncateTextProps {
    text: string;
}

const TruncateText: React.FC<TruncateTextProps> = ({ text }) => {
    const maxLength = 10; // 최대 글자 수
    const displayedLength = 5; // 처음에 표시할 글자 수
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (text.length >= maxLength) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const truncate = (str: string) => {
        if (str.length >= maxLength) {
            return (
                <span className="ellipsis-container">
          {str.substring(0, displayedLength)}
                    <span
                        className="ellipsis-icon"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
            <EllipsisIcon width={12} height={12} color="black" />
                        {isHovered && <span className="tooltip">{text}</span>}
          </span>
        </span>
            );
        }
        return str;
    };

    return (
        <span className="truncate-text">
      {truncate(text)}
    </span>
    );
};

export default TruncateText;
