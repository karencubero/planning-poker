import React from 'react';
import {Props} from "./carousel-item.type";
import './carousel-item.css'

export const CarouselItem: React.FC<Props> = ({children}) => {
    return (
        <div className="carousel-item">
            {children}
        </div>
    )
};