import React from 'react';
import {Props} from "./carousel.type";
import './carousel.css'

export const Carousel: React.FC<Props> = ({children}) => {
    return (
        <div className="carousel">
            {children}
        </div>
    )
};