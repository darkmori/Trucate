import React from 'react';

interface EllipsisIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const EllipsisIcon: React.FC<EllipsisIconProps> = ({
                                                       width = 24,
                                                       height = 24,
                                                       color = 'black'
                                                   }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="5" cy="12" r="2" fill={color}/>
        <circle cx="12" cy="12" r="2" fill={color}/>
        <circle cx="19" cy="12" r="2" fill={color}/>
    </svg>
);

export default EllipsisIcon;
